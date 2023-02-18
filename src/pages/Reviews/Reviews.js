import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/moviesApi";


export default function Reviews() {

  const {id} = useParams();

  const [reviews, setReviews] = useState([])
  
  useEffect(()=> {

    const fetchMovieDetails = async () => {
      const {results} = await fetchMovieReviews(id)
      setReviews(results)
    }
    fetchMovieDetails()
    
  },[id])

  return (
    <ul>
      {reviews.map(({author, content, id }) => 
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      )}
    </ul>
  )
}

