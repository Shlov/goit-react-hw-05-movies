import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/Searchbar/Searchbar"
import { useState, useEffect } from "react"
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { fetchQuery } from "services/moviesApi";

export const Movies = () => {
  const [download, setDownload] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [searchMovie, setSearchMovie] = useSearchParams();
  // const searchMovieUrl = searchMovie.get('query')

  useEffect(() => {
    if (searchQuery === '') {
      const nextParams = searchMovie.get('query');
      setSearchQuery(nextParams ? nextParams : '')
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

  // const getSearchQuery = () => {
  //   console.log('getSQ', searchMovie.get('query'))
  //   return searchMovie.get('query')
  // }
  
  const handleFormSubmit = () => {
    const nextSearchParams = searchMovie.get('query')
    if (!nextSearchParams.trim() || nextSearchParams === '') {
      return toast.error('Enter a search query')
    }
    // setSearchMovie({query: newSearchQuery})
    setSearchQuery(nextSearchParams)
    console.log('Submit', nextSearchParams)
  }

  const updateQueryString= (query) => {
    const nextParams = query !== '' ? {query} : {};
    setSearchMovie(nextParams)
  }


  return (
    <>
      <h2>Search by name</h2>
      <Searchbar onSubmit={handleFormSubmit} onChange = {updateQueryString}/>
      {download && <Loader/>}
      {!download && Boolean(movies.length) && <MoviesList movies = {movies}/>}
    </>
  )
}