import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/Searchbar/Searchbar"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchQuery } from "services/moviesApi";

export const Movies = () => {
  const [download, setDownload] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [searchMovie, setSearchMovie] = useSearchParams();

  useEffect(() => {
    if (searchQuery === '') {
      const searchMovieUrl = searchMovie.get('query')
      console.log(searchMovieUrl)
      setSearchQuery(searchMovieUrl ? searchMovieUrl : '')
      return
    }
    const fatchMovies = async () => {
      setDownload(true);
      const movies = await (await fetchQuery(searchQuery)).data.results
      setMovies(movies);
      setDownload(false);
    }
    fatchMovies()
  }, [searchQuery])
  
  const handleFormSubmit = (newSearchQuery) => {
    console.log(searchMovie)
    setSearchMovie({query: newSearchQuery})
    setSearchQuery(newSearchQuery)
  }


  return (
    <>
      <h2>Movies</h2>
      <Searchbar onSubmit={handleFormSubmit}/>
      {download && <Loader/>}
      {!download && Boolean(movies.length) && <MoviesList movies = {movies}/>}
    </>
  )
}