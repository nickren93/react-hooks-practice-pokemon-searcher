import React, { useState } from "react";
import { Form} from "semantic-ui-react";

function PokemonForm( { onHandleSubmit }) {

  const [newPokemon, setNewPokemon] = useState(
    {
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      }
    }
  )

  function onHandleSubmitClick(e){
    e.preventDefault()
    onHandleSubmit(newPokemon)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onHandleSubmitClick}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={newPokemon.name}
            onChange={e => setNewPokemon({...newPokemon, name: e.target.value})}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={newPokemon.hp}
            onChange={e => setNewPokemon({...newPokemon, hp: e.target.value})}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front}
            onChange={e => setNewPokemon(
              {
                ...newPokemon, 
                sprites: {
                  ...newPokemon.sprites,
                  front: e.target.value,
                }
              }
            )}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back}
            onChange={e => setNewPokemon(
              {
                ...newPokemon, 
                sprites: {
                  ...newPokemon.sprites,
                  back: e.target.value,
                }
              }
            )}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
