import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "../styles/searchNavResultados.css"

function SearchNavResultados ({onSearchData, resource}){
    const token = import.meta.env.VITE_TOKEN;
    const url = import.meta.env.VITE_URL_BASE;
    
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    
    const onSearch = async (nombre) => {
      const response = await fetch(
        `${url}/${resource}/search/${nombre}/`,
        options
      );
      const data = await response.json();
      
      console.log(data);
      onSearchData(data);
    };
    

  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    console.log(onSearch(query));
  };

  return (
    <form onSubmit={handleSearch} className='centeredForm' style={styles.form}>
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Buscar..." 
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        <FaSearch />
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    alignItems: 'right',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
    backgroundColor: 'grey',
    outline: 'none',
  },
  button: {
    padding: '10px',
    border: '1px solid #ccc',
    borderLeft: 'none',
    backgroundColor: 'black',
    cursor: 'pointer',
    borderRadius: '0 4px 4px 0',
  },
};

export default SearchNavResultados;
