import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input'
import Table from './Components/Table'

const peopleURL = 'https://swapi.dev/api/people/';

const App = () => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    axios.get(peopleURL)
      .then((res) => getOtherData(res.data.results))
  }, []);

  const getOtherData = async (characters) => {
    for (const character of characters) {
      await getPlanets(character);
      await getSpecies(character);
      setCharacters(characters);
    };
  };

  const getPlanets = async (character) => {
   const planet = character.homeworld;
   const response = await axios.get(planet);
   character.homeworld = response.data.name;
  };
  
  const getSpecies = async (character) => {
    if (character.species.length === 0){
      character.species = "Human";
    } else {
    const response = await axios.get(character.species);
    character.species = response.data.name
    };
  };

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
