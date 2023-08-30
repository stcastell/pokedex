import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  //'https://pokeapi.co/api/v2/pokemon'
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      const JSONResponse = await response.json(); 
      setData(JSONResponse.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <main>
        {data.map(item => {
          return (
            <li key={item.url}>{item.name}</li>
          )
        })}
        <h1>Pokédex</h1>
      </main>
    </>
  );
}

export default App;
