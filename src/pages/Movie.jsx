import React, { useEffect, useState } from 'react';
import { Card } from '../components/UI/Card';
import { getMovie } from '../services/GetService';
import "../App.css";

export const Movie = () => {

  const [data, setData] = useState([]);


    const getMovieData = async () => {
      try {
        const res = await getMovie();
        console.log(res.data.Search);
        setData(res.data.Search);
        
      } catch (error) {
        console.error("Error message:", error.message);
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
      }
    }

    useEffect(() => {
        getMovieData();
    }, []);

  return (
    <ul className="container grid-four--cols">
    {
      data.map((curElem) => {
        return <Card key={curElem.imdbID} movieData={curElem} />;
      })
    }
  </ul>
  ); 
};
