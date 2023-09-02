import React, { useEffect, useState } from 'react';
import './App.css';

import NamesList from './Components/NamesList';
import Sprite from './Components/Sprite'
const App = () => {

  //'https://pokeapi.co/api/v2/pokemon'
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState({
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/'
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      const JSONResponse = await response.json(); 
      setData(JSONResponse.results);
    }
    fetchData();
  }, []);

  const getFilteredItemHandler = item => { 
    setFilteredData(item);
  }

  return (
    <>
      <Sprite data={filteredData}/>
      <NamesList data={data} onGetFilteredItem={getFilteredItemHandler}/>
    </>
  );
}

export default App;
