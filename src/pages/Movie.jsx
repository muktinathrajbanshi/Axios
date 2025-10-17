import React, { useEffect } from 'react';
import axios from "axios";

export const Movie = () => {

    const API = 
    "https://www.omdbapi.com/?i=tt3896198&
    apikey=1c12799f&s=titanic&page=1";

    // const res = axios.get(API);

    useEffect(() => {
        getMovieData();
    }, []);

  return <h1>Movie</h1>;
};
