import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, setPokemon}) {
  console.log(pokemon)
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon ? (pokemon.map((poke) => {
        return <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} sprites={poke.sprites}/>
      })) : null}
      <h1>Hello From Pokemon Collection</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
