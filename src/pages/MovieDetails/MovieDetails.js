import { StyledLink } from "components/Header/StyledLink.styled";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { fetchMovie } from "services/moviesApi";

export const MovieDetails = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({})
  
  useEffect(()=> {
    if (movie === {}) {
      return
    }

    const fetchMovieDetails = async () => {
      // setMovie(await fetchMovie(id))
      const mov = await (await fetchMovie(id)).data
      setMovie(mov)
    }
    fetchMovieDetails()
    
  },[id])
  // console.log(movie)


  return (
    <>
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie"/>
      <h3>{movie.original_title}</h3>
      <p>{movie.status}</p>
    </div>
    <StyledLink to='cast'>
      <button type="button">Cast</button>
    </StyledLink>

    <StyledLink to='reviews'>
      {/* <button type="button">Reviews</button> */}
      Reviews
    </StyledLink>
    <Outlet />

    </>
  )
}