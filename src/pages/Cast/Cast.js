import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/moviesApi";
import defImg from '../../img/no-image.png'


export default function Cast() {
  
  const {id} = useParams();

  const [castArr, setCastArr] = useState([])
  
  useEffect(()=> {
    const fetchMovieDetails = async () => {
      const {cast} = await fetchMovieCast(id)
      setCastArr(cast)
    }
    fetchMovieDetails()
    
  },[id])
  
  return (
    <ul>
      {castArr.map(({credit_id, name, character, profile_path}) => 
        <li key={credit_id}>
          <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defImg} alt="movie"  width={180}></img>
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      )}
      
    </ul>
  )
}

