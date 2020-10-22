import React, { useState } from "react";

import "./styles.css";

const PokedexTable = (props) => {
  const { pokemons, onPokemonClick, loadMore, isDataLoading } = props;

  const listItems = pokemons.map((pokemon) => {
    const listOfTypes = pokemon.types.map((type) => {
      return (
        <span className="pokemon-type" key={type.type.name}>
          {type.type.name}
        </span>
      );
    });

    return (
      <div
        className="element"
        key={pokemon.id}
        onClick={() => onPokemonClick(pokemon.id)}
      >
        <img className="pokemon-img" src={pokemon.sprite}></img>
        <p className="pokemon-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </p>
        <div className="pokemon-types">{listOfTypes}</div>
      </div>
    );
  });

  return (
    <div className="pokedexTable">
      {listItems}
      <button className="loadMore" onClick={loadMore} disabled={isDataLoading}>
        Load More
      </button>
    </div>
  );
};

export default PokedexTable;
