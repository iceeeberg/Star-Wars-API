import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input'
import Table from './Components/Table'

const peopleURL = 'https://swapi.dev/api/people/';
const planetURL = 'http://swapi.dev/api/planets/';
const speciesURL = 'http://swapi.dev/api/species/';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(peopleURL)
      .then((results) => results.json())
      .then((data) => {
        let characters = data.results
        setCharacters(characters)
  })
}, [characters])

const getOtherData = async (characters) => {
  for (const character of characters){
    character.homeworld = await getPlanets(character.homeworld)
    character.species = await getSpecies(character.species)
  }
  return characters
}

const getPlanets = async (planetURL) => {
  const response = await axios
    .get(planetURL.replace('http', 'https'));
  return response.name;
}

const getSpecies = async (speciesURL) => {
  if (speciesURL.length === 0){
    return "Human"
  }
  const response = await axios
    .get(speciesURL.replace('http', 'https'));
  return response.name;
}

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
