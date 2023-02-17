import { Loader } from "components/Loader/Loader"
import { MoviesList } from "components/MoviesList/MoviesList"
import { useEffect, useState } from "react"
import { fetchTrending } from "services/moviesApi"

const Home = () => {

  const [download, setDownload] = useState(true);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fatchMovies = async () => {
      const movies = await (await fetchTrending()).data.results
      setMovies(movies);
      setDownload(false);
      // console.log(movies)
    }
    fatchMovies()
  }, [])
  

  return (
    <>
      <h2>Trending movies today</h2>
      {download && <Loader/>}
      {!download && <MoviesList movies = {movies}/>}
      

    </>
  )
}

export default Home