import React, {useState} from 'react';

const Input = ({setSearch}) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="character" 
        placeholder="Search Character..."
        onChange={(e) => setInput(e.target.value)}
      >
      </input>
      <button  
        class="btn btn-primary ml-2" 
        type ="submit" 
        name="submit"
      >
        Search
      </button>
      </form>
  </div>
  )
}


export default Input