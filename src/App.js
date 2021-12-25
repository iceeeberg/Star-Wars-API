import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input'
import Table from './Components/Table'

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(0);
 
  useEffect(() => {
    axios.get('http://swapi.dev/api/people/')
      .then((res) =>  {
        const numberOfPages =  calculateNumPages(res.data.count)
        setPageCount(numberOfPages)
        setMissingHomeWorldAndSpecies(res.data.results)
      })
  }, []);

  const setMissingHomeWorldAndSpecies = async (characters) => {
    for (const character of characters) {
      character.homeworld = await getHomeWorld(character.homeworld);
     character.species = await getSpecies(character.species);
    };
    setCharacters(characters);
  };

  const getHomeWorld = async (homeWorldUrl) => {
  //  const homeWorldURLHttps = homeWorldUrl.replace('https', 'http')
   const response = await axios.get(homeWorldUrl);
   return response.data.name;
  };
  
  const getSpecies = async (speciesArray) => {
    if (speciesArray.length === 0){
      return "Human";
    } else {
    // const speciesURL = speciesArray[0].replace("https", "http")
    const response = await axios.get(speciesArray);
    return response.data.name
    };
  };

const handlePageChange = (pageNumber) => {
  axios.get(`http://swapi.dev/api/people/?page=${pageNumber}`)
  .then((res) =>  setMissingHomeWorldAndSpecies(res.data.results))
}

const handleSearch = (search) => {
  axios.get(`http://swapi.dev/api/people/?search=${search}`)
  .then((res)  => setMissingHomeWorldAndSpecies(res.data.results))
}

const calculateNumPages = (count) => {
  return Math.ceil(count / 10);
}

  return (
    <div>
      <header className="text-center">
        <h1 className="font-weight-bold">Star Wars</h1>
      </header>
      <Input search={handleSearch}/>
      <Table characters={characters} />
      <ReactPaginate
      pageCount={`${pageCount}`}
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
