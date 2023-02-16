import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/moviesApi";

export const Reviews = () => {

  const {id} = useParams();

  const [reviews, setReviews] = useState([])
  
  useEffect(()=> {
    // if (reviews === []) {
    //   return
    // }

    const fetchMovieDetails = async () => {
      const {results} = await fetchMovieReviews(id)
      setReviews(results)
      console.log(results)
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