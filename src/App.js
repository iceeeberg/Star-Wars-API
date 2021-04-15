import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Input from './Components/Input'
import Table from './Components/Table'

function App() {
  const [page, setPage] = useState(1);

useEffect(() => {
  fetch (
    'https://swapi.dev/api/people/'
  )
}, [])

  return (
    <div>
      <header>
        <h1>Star Wars</h1>
      </header>
      <Input />
      <Table />
    </div>
  );
}

export default App;
