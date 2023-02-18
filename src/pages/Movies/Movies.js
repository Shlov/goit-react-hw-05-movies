import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/Searchbar/Searchbar"
import { useState, useEffect, useRef } from "react"
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { fetchQuery } from "services/moviesApi";

export default function Movies() {
  
  const [download, setDownload] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovie, setSearchMovie] = useSearchParams();

  const nextSearchParams = searchMovie.get('query') ?? '';
  const startSearchHref = useRef(nextSearchParams)
  console.log('nextSearchParams', `'${nextSearchParams.trim()}'`)

  useEffect(() => {
    setSearchQuery(startSearchHref.current)
  },[])
  
  useEffect(() => {
    if (searchQuery === '') {
      return
    } 

    const fatchMovies = async () => {
      setDownload(true);
      try {
        const movies = await (await fetchQuery(searchQuery)).data.results
        setMovies(movies);
      } catch (error) {
        console.log(error)
        toast.error('Error')
      } finally {
        setDownload(false);
      }
    }
    fatchMovies()
  }, [searchQuery])

  const handleFormSubmit = () => {
    if (!(nextSearchParams.trim()) || nextSearchParams === '') {
      return toast.error('Enter a search query')
    }
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

