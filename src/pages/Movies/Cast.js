import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/moviesApi";

export const Cast = () => {
  const {id} = useParams();

  const [cast, setCast] = useState([])
  
  useEffect(()=> {
    // if (cast === {}) {
    //   return
    // }

    const fetchMovieDetails = async () => {
      const castData = await (await fetchMovieCast(id)).data
      setCast(castData.cast)
      console.log(castData.cast)
    }
    fetchMovieDetails()
    console.log(cast)
    
  },[id])

  return (
    <ul>
      {/* {cast.cast.map(actor => {
        <li>
        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="movie"></img>
        <h3>{actor.name}</h3>
        <p>{actor.character}</p>
      </li>
      })} */}
      
    </ul>
  )
}