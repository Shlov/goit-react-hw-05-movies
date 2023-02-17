import { StyledLink } from "components/Header/StyledLink.styled";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovie } from "services/moviesApi";
import defImg from '../../img/no-poster.png'

const MovieDetails = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({})
  const location = useLocation()
  const btnBackHref = useRef(location.state?.from ?? "/movies")
  
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
      <Link to={btnBackHref.current}>Back movies</Link>
      <div>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defImg} alt={movie.original_title} />
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

export default MovieDetails