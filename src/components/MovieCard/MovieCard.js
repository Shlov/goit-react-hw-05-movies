

export const MovieCard = ({movie}) => {
  console.log(movie)
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
      <p>{movie.original_title}</p>
      <p>{movie.release_date}</p>
    </li>
  )
}