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
  const searchMovieUrl = searchMovie.get('query')

  useEffect(() => {
    if (searchQuery === '') {
      setSearchQuery(searchMovieUrl ? searchMovieUrl : '')
      return
    }
    const fatchMovies = async () => {
      setDownload(true);
      const movies = await (await fetchQuery(searchMovieUrl)).data.results
      setMovies(movies);
      setDownload(false);
    }
    fatchMovies()
  }, [searchMovie, searchQuery])
  
  const handleFormSubmit = () => {
    // setSearchMovie({query: newSearchQuery})
    setSearchQuery(searchMovieUrl)
  }

  const updateQueryString= (query) => {
    const nextParams = query !== '' ? {query} : {};
    setSearchMovie(nextParams)
  }


  return (
    <>
      <h2>Movies</h2>
      <Searchbar onSubmit={handleFormSubmit} onChange = {updateQueryString}/>
      {download && <Loader/>}
      {!download && Boolean(movies.length) && <MoviesList movies = {movies}/>}
    </>
  )
}