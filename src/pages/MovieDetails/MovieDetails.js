import { StyledLink } from "components/Header/StyledLink.styled";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovie } from "services/moviesApi";
import defImg from '../../img/no-poster.png'

export default function MoviesDetails() {
  
  const {id} = useParams();
  const [movie, setMovie] = useState({})
  const location = useLocation()
  const btnBackHref = useRef(location.state?.from ?? "/movies")
  
  useEffect(()=> {

    const fetchMovieDetails = async () => {
      try {
        const mov = await (await fetchMovie(id)).data
        setMovie(mov)
      } catch (error) {
        console.log(error)
        toast.error('Error')
      }
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

