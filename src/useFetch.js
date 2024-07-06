import { useState, useEffect } from "react";

export function useFetch(url, opctions) {

     const [data, setData] = useState([]);
     useEffect(() => {
       fetch(url, opctions)
         .then((response) => response.json())
         .then((json) => setData(json));
     }, []);
     return { data };
}


