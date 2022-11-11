const Pokemon = (pokemon) => {
  return (
    <div className="pokemon">
      <h3 className="pokemon-name">{pokemon.name}</h3>

      <img src={pokemon.image} alt="" />

      <h3>Type: {pokemon.type}</h3>
    </div>
  );
};

const PokemonType = PropTypes.exact({
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
});

Pokemon.propTypes = {
  pokemon: PokemonType,
};
