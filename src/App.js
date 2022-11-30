import { useState, useEffect } from 'react';
import './App.css';
import Users from "./Users";

function App() {
  const [allPokemon, setAllPokemon] = useState([])

  useEffect( () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then( (response) => response.json())
      .then( (data) => data.results)
      .then(setAllPokemon)
  },[]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
