import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

import Input from './Components/Input'
import Table from './Components/Table'


function App() {
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
