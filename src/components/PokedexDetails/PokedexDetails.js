import React, { useState } from "react";

import "./styles.css";

const PokedexDetails = (props) => {
  const { pokemon } = props;

  const types = pokemon.types.map((type) => type.type.name);

  const pokemonDetailedTable = pokemon.stats.map((stat) => {
    return (
      <tr key={stat.stat.name}>
        <td className="table-name">{stat.stat.name}</td>
        <td className="table-amount">{stat.base_stat}</td>
      </tr>
    );
  });

  return (
    <div className="pokedex-details-wrapper">
      <div className="pokedex-details">
        <img className="pokemon-details-img" src={pokemon.sprite}></img>
        <p className="pokemon-details-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </p>
        <table>
          <tbody>
            <tr>
              <td className="table-name">Type</td>
              <td className="table-amount">{types.join(", ")}</td>
            </tr>
            {pokemonDetailedTable}
            <tr>
              <td className="table-name">Height</td>
              <td className="table-amount">{pokemon.height}</td>
            </tr>
            <tr>
              <td className="table-name">Weight</td>
              <td className="table-amount">{pokemon.weight}</td>
            </tr>
            <tr>
              <td className="table-name">Total movers</td>
              <td className="table-amount">{pokemon.totalMoves}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokedexDetails;
