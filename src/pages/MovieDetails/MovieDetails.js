import { StyledLink } from "components/Header/StyledLink.styled";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovie } from "services/moviesApi";

export const MovieDetails = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({})
  const location = useLocation()

  const backLinkHref = location.state?.from ?? "/movies";
  // console.log(location)
  // console.log(backLinkHref)


  
  useEffect(()=> {
    // if (movie === {}) {
    //   return
    // }

    const fetchMovieDetails = async () => {
      // setMovie(await fetchMovie(id))
      const mov = await (await fetchMovie(id)).data
      setMovie(mov)
    }
    fetchMovieDetails()
    
  },[id])

  if (!movie) return

  return (
    <>
      <Link to={backLinkHref}>Back movies</Link>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie"/>
        <h3>{movie.original_title}</h3>
        <p>{movie.status}</p>
      </div>
      <StyledLink to='cast'>
        <button type="button">Cast</button>
      </StyledLink>
      <StyledLink to='reviews'>
        <button type="button">Reviews</button>
      </StyledLink>
      <Outlet />
    </>
  )
}