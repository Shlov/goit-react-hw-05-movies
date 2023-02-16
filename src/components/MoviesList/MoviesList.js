import { MovieCard } from "components/MovieCard/MovieCard"
import { List } from "./MoviesList.styled"


export const MoviesList = ({movies}) => {
  // console.log(movies)
  return (
    <List>
      {movies.map(movie => <MovieCard key={movie.id} movie = {movie}></MovieCard>)}
    </List>
  )
}