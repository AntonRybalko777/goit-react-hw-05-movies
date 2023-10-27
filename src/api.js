import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '806243b8f40dd574987145e0eacf68b2';

export const getTrending = async () => {
  const response = await axios.get(`trending/all/day?api_key=${KEY}`);
  return response.data;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  return response.data;
};
