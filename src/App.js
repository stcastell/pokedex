import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

import NamesList from './Components/NamesList';
import Sprite from './Components/Sprite';

const App = () => {

  const [list, setList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur')

  useEffect(() => { 
    async function fetchPokemon() { 
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const jsonResponse = await response.json();
      setList(jsonResponse.results);
    }
    fetchPokemon();
  }, []);

  const selectPokemon = pokemon => { 
    setSelectedPokemon(pokemon);
  }

  return (
    <div className={styles.pokedex}>
      <Sprite selectedPokemon={selectedPokemon} pokeList={list}/>
      <NamesList pokeList={list} onSelectPokemon={selectPokemon}/>
    </div>
  );
}

export default App;
