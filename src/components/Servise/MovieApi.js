import axios from 'axios';

const API_KEY = '01b8aceb6eeedaf8d9d54d9e302bda2b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const MovieSearchApi = async value => {
  const data = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${value}`
  );
  return data.data;
};

const getMovieDetails = async (movieId, info) => {
  const data = await axios.get(`/movie/${movieId}${info}?api_key=${API_KEY}`);
  return data.data;
};

const getImages = async () => {
  const data = await axios.get(`/configuration?api_key=${API_KEY}`);
  return data.data;
};
export { MovieSearchApi, getMovieDetails, getImages };
