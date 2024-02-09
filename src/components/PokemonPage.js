import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setPokemon(data))
  }, [])
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon}/>
      <br />
      <Search pokemon={pokemon} setPokemon={setPokemon}/>
      <br />
      <PokemonCollection pokemon={pokemon} setPokemon={setPokemon}/>
    </Container>
  );
}

export default PokemonPage;
