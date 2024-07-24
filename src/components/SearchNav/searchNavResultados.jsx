//
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/searchNavResultados.css";
import Swal from "sweetalert2";

function SearchNavResultados({ onSearchData, resource }) {
  const token = localStorage.getItem("token");
  const url = import.meta.env.VITE_URL_BASE;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const onSearch = async (clave) => {
    try {
      const response = await fetch(
        `${url}/${resource}/search/${clave}`,
        options
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        if(data.length===0) {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "No se encontó el análisis",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          onSearchData(data);
        }
        
      } else {
        console.log("Data fetched is not an array:", data);
      } 
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(parseInt(query));
  };

  return (
    <form onSubmit={handleSearch} className="centeredForm" style={styles.form}>
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
}

const styles = {
  form: {
    display: "flex",
    alignItems: "right",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px 0 0 4px",
    backgroundColor: "#C2BEBE",
    outline: "none",
    color: "black",
  },
  button: {
    padding: "10px",
    border: "1px solid #ccc",
    borderLeft: "none",
    backgroundColor: "black",
    cursor: "pointer",
    borderRadius: "0 4px 4px 0",
  },
};

export default SearchNavResultados;
