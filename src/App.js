import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Input from './Components/Input'
import Table from './Components/Table'

let url = 'https://swapi.dev/api/people/';

const App = () => {
  const [characters, setCharacters] = useState([]);

useEffect(() => {
  fetch(url)
  .then(results => results.json())
  .then(characters => {
  // console.log('characters:' , characters.results)
  setCharacters({characters: characters.results})
  })
}, [])

  return (
    <div>
      <header>
        <h1>Star Wars</h1>
      </header>
      <Input />
      <Table characters={characters} />
    </div>
  );
}

export default App;
