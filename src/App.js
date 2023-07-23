import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [data, setData] = useState(null);
  const [reset, setReset] = useState(false);

  const clickHandler = () => {
    reset ? setReset(false) : setReset(true);
    console.log(reset)
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      //'https://jsonplaceholder.typicode.com/users'
      //https://pokeapi.co/api/v2/pokemon/ditto
      .then(res => res.json())
      .then(data => { setData(data);  console.log(data.name)});
  }, {});

  return (
    <Fragment>
      {data.name}
      <button onClick={clickHandler}>PRESS ME WILL YA</button>
    </Fragment>
  );
}

export default App;
