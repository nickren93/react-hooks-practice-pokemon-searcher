import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [originalPokemons, setOriginalPokemons] = useState([])
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => {
      setPokemons(data)
      setOriginalPokemons(data)
    })
  }, [])

  function handleSearch(userInput){
    if(userInput == ""){
      setPokemons(originalPokemons)
    }else{
      const updatedPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(userInput.toLowerCase())
      })
      setPokemons(updatedPokemons)
    } 
  }

  function handleSubmit(newPokemon){
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then(data => {
      const updatedPokemons = [...pokemons, data]
      setPokemons(updatedPokemons)
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onHandleSubmit={handleSubmit} />
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokemons={pokemons} />
    </Container>
  );
}

export default PokemonPage;
