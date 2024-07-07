import { useState, useEffect } from "react";

//Consumo de fetch para el módulo de Citas
//TODO para los mtodos GET´s
export function useFetch(url, options) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return { data };
}

//TODO para los métodos POST
export function useFetchPOST(url, formData, token) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch(url, options).then((res) => {
    console.log(res);
  })
}

//TODO para los métodos POST tabla CITAS(BLOB)
export function useFetchBLOB(url, formData, token) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  };

  fetch(url, options).then((res) => {
    console.log(res);
  })
}
