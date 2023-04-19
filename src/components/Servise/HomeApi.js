import axios from 'axios';

const API_KEY = '01b8aceb6eeedaf8d9d54d9e302bda2b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const HomeApi = async () => {
  const data = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.data;
};

export default HomeApi;
