import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./index.css";
import {
  PokedexTable,
  PokedexFilterBar,
  PokedexDetails,
} from "../../components";
import filterPokemons from "../../helpers/filterPokemons";
import * as actions from "./actions";

const PokedexContainer = (props) => {
  const {
    fetchData,
    fetchPossibleTypes,
    addTypeToFilter,
    removeTypeFromFilter,
    pokemons,
    limit,
    offset,
    possibleTypes,
    filteredByType,
    isDataLoading,
  } = props;
  const [detailedPokemon, setDetailedPokemon] = useState(null);

  useEffect(() => {
    fetchData(limit, offset);
    fetchPossibleTypes();
  }, []);

  const onPokemonClick = (id) => {
    setDetailedPokemon(pokemons.filter((pokemon) => pokemon.id === id)[0]);
  };

  const loadMore = () => {
    fetchData(limit, offset);
  };

  const filteredPokemons = filterPokemons(pokemons, filteredByType);

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <PokedexFilterBar
        possibleTypes={possibleTypes}
        addTypeToFilter={addTypeToFilter}
        removeTypeFromFilter={removeTypeFromFilter}
      />
      <div className="pokedex-main">
        {!!pokemons.length && (
          <PokedexTable
            pokemons={filteredPokemons}
            onPokemonClick={onPokemonClick}
            loadMore={loadMore}
            isDataLoading={isDataLoading}
          />
        )}
        {!!detailedPokemon && <PokedexDetails pokemon={detailedPokemon} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokedex.pokemons,
    filteredByType: state.pokedex.filteredByType,
    limit: state.pokedex.limit,
    offset: state.pokedex.offset,
    possibleTypes: state.pokedex.possibleTypes,
    isDataLoading: state.pokedex.isLoading,
  };
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);
