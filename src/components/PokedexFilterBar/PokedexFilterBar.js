import React, { useState } from "react";

import "./styles.css";

const PokedexFilterBar = (props) => {
  const { possibleTypes, addTypeToFilter, removeTypeFromFilter } = props;

  const handleCheck = (event) => {
    if (event.target.checked) {
      addTypeToFilter(event.target.value);
    } else {
      removeTypeFromFilter(event.target.value);
    }
  };

  const checkBox = possibleTypes.map((element) => {
    return (
      <span key={element.name} className="input-wrapper">
        <input
          type="checkbox"
          value={element.name}
          onClick={handleCheck}
          id={`check-${element.name}`}
        ></input>
        <label htmlFor={`check-${element.name}`}>{element.name}</label>
      </span>
    );
  });

  return (
    <div className="pokedex-filter">
      <h2>Filter pokemons by type:</h2>
      <ul>{checkBox}</ul>
    </div>
  );
};

export default PokedexFilterBar;
