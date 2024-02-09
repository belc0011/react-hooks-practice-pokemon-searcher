import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemon, setPokemon}) {
  const [newPoke, setNewPoke] = useState({})
  function handleNameChange(event) {
    console.log(event.target.value)
    setNewPoke({...newPoke, name: event.target.value})
  }

  function handleHpChange(event) {
    console.log(event.target.value)
    const newHp = parseInt(event.target.value)
    setNewPoke({...newPoke, hp: newHp, id: pokemon.length + 2})
  }

  function handleFrontImageChange(event) {
    
    setNewPoke({...newPoke, sprites: {
      ...newPoke.sprites, 
      front: event.target.value},
    })
  }

  function handleBackImageChange(event) {
    
    setNewPoke({...newPoke, sprites: {
      ...newPoke.sprites, 
      back: event.target.value},
    })
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          fetch('http://localhost:3001/pokemon', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPoke),
          })
          .then(res => res.json())
          .then(data => setPokemon([...pokemon, newPoke]))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleNameChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleHpChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFrontImageChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBackImageChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
