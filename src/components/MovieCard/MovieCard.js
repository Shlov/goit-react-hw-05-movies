import { StyledLink } from "components/Header/StyledLink.styled"
import { useLocation } from "react-router-dom"


export const MovieCard = ({movie}) => {
  // console.log(movie)
  const location = useLocation();
  return (
    <li>
      <StyledLink to={`/movies/${movie.id}`} state={{from: location}}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
      <p>{movie.original_title}</p>
      <p>{movie.release_date}</p>
      </StyledLink>
    </li>
  )
}