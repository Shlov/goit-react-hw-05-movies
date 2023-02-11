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