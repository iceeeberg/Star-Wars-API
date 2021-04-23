import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input'
import Table from './Components/Table'


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((res) => getOtherData(res.data.results))
  }, []);

  useEffect(() => {
    handleSearch(search)
  }, [search])

  const getOtherData = async (characters) => {
    for (const character of characters) {
      await getPlanets(character);
      await getSpecies(character);
    };
    setCharacters(characters);
  };

  const getPlanets = async (character) => {
   const planet = character.homeworld;
   const planetURL = planet.replace('http', 'https')
   const response = await axios.get(planetURL);
   character.homeworld = response.data.name;
  };
  
  const getSpecies = async (character) => {
    if (character.species.length === 0){
      character.species = "Human";
    } else {
    const speciesURL = character.species.toString().replace("http", "https")
    const response = await axios.get(speciesURL);
    character.species = response.data.name
    };
  };

const handlePageChange = (pageNumber) => {
  axios.get(`https://swapi.dev/api/people/?page=${pageNumber}`)
  .then((res) => getOtherData(res.data.results))
}

const handleSearch = (search) => {
  axios.get(`https://swapi.dev/api/people/?search=${search}`)
  .then((res) => getOtherData(res.data.results))
}

  return (
    <div>
      <header className="text-center">
        <h1 className="font-weight-bold">Star Wars</h1>
      </header>
      <br></br>
      <Input 
      setSearch={setSearch}
      />
      <br></br>
      <Table characters={characters} />
      <ReactPaginate
      pageCount="9"
      onPageChange={({ selected }) => {
        handlePageChange(selected + 1);
      }}
      containerClassName ="pagination justify-content-center" 
      className="page-item active"
      previousLinkClassName ="page-link"  
      pageClassName ="page-link" aria-hidden="true"
      nextLinkClassName ="page-link" 
      activeClassName ="active"
      />
    </div>
  );
}

export default App;
