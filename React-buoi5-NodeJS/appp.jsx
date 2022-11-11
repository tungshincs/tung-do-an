const App = () => {
  const user = {
    name: "Tùng",
    isAdmin: true,
  };

  const names = ["Ba", "Béo", "Mai Anh", "Bon"];
  const list = names.map((name) => <Hello name={name} />);
  return (
    <div className="container">
      {list}

      <User user={user} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);

const PokemonApp = () => {
  const pokemons = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];

  return (
    <div className="pokemon-app">
      <h1 className="heading">Pokedex</h1>

      <PokemonList pokemons={pokemons} />
    </div>
  );
};
