const filterPokemons = (pokemons, filteredByType) => {
  if (filteredByType.length === 0) {
    return pokemons;
  }
  const filtered = pokemons.filter((pokemon) => {
    const types = pokemon.types.map((type) => type.type.name);
    return types.some((t) => filteredByType.includes(t));
  });
  return filtered;
};

export default filterPokemons;
