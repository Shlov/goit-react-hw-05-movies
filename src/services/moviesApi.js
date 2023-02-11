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