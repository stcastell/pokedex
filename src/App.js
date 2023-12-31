import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { useNavigate } from 'react-router-dom';

import NamesList from './Components/NamesList';
import Sprite from './Components/Sprite';

const App = () => {

  const route = useNavigate();

  const [list, setList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur')

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const jsonResponse = await response.json();
      setList(await jsonResponse.results);
    }
    fetchPokemon();
  }, []);

  const selectPokemon = pokemon => {
    setSelectedPokemon(pokemon);
  }

  const searchPokemon = () => { 
    route('/search');
  }

  return (
    <div className={styles.pokedex}>
      <div className={styles.container}>
        <Sprite selectedPokemon={selectedPokemon} pokeList={list} />
        <NamesList pokeList={list} onSelectPokemon={selectPokemon} />
      </div>
      {/* <button className={styles.search_button} onClick={searchPokemon}>SEARCH</button> */}
    </div>
  );
}

export default App;
