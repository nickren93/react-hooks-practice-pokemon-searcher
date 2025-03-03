import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( { pokemons } ) {

  const pokemonsElement = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} 
    front={pokemon.sprites.front} back={pokemon.sprites.back} id={pokemon.id} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {/*<h1>Hello From Pokemon Collection</h1>*/}
      {pokemonsElement}
    </Card.Group>
  );
}

export default PokemonCollection;
