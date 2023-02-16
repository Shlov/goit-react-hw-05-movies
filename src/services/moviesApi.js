import axios from 'axios';

const KEY = 'bcad57bcc751e594ef248154d039e8ec';

export function fetchTrending() {
  const URL = 'https://api.themoviedb.org/3/trending/movie/day';
  return axios.get(URL, {
    params: {
      api_key: KEY,
    }
  });
}

export function fetchQuery(q, page = 1) {
  const URL = 'https://api.themoviedb.org/3/search/movie';
  return axios.get(URL, {
    params: {
      api_key: KEY,
      query: q,
      language: 'en-US',
      page: page,
      include_adult: false,
    }
  });
}

export function fetchMovie(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}`;
  return axios.get(URL, {
    params: {
      api_key: KEY,
      language: 'en-US',
    }
  }); 
}

export async function fetchMovieCast(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const cast = await axios.get(URL, {
    params: {
      api_key: KEY,
      language: 'en-US',
    }
  });
  return cast.data 
}

export async function fetchMovieReviews(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const reviews = await axios.get(URL, {
    params: {
      api_key: KEY,
      language: 'en-US',
    }
  });
  return reviews.data 
}

