import React from "react";

function Search({pokemon, setPokemon}) {
  function handleChange(event) {
    const searchedPokemon = event.target.value;
    setPokemon(pokemon.filter((poke) => {
      return poke.name.includes(searchedPokemon)
    }))
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
