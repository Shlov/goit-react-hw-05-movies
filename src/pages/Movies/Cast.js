import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/moviesApi";

export const Cast = () => {
  const {id} = useParams();

  const [castArr, setCastArr] = useState([])
  
  useEffect(()=> {
    const fetchMovieDetails = async () => {
      const {cast} = await fetchMovieCast(id)
      setCastArr(cast)
      // console.log(cast)
    }
    fetchMovieDetails()
    
  },[id])
  
  return (
    <ul>
      {castArr.map(({credit_id, name, character, profile_path}) => 
        <li key={credit_id}>
          <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="movie"></img>
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      )}
      
    </ul>
  )
}