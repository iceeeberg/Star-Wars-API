import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input'
import Table from './Components/Table'

const peopleURL = 'https://swapi.dev/api/people/';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(peopleURL)
      .then((results) => results.json())
      .then((characters) => {
        setCharacters(characters.results)
   // console.log('characters:', characters.results)
  })
}, [characters])

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
