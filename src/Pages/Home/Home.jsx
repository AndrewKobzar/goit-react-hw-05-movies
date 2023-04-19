import { useEffect, useState } from 'react';
import HomeApi from 'components/Servise/HomeApi';
import { useLocation, Link } from 'react-router-dom';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const addMovies = async () => {
      try {
        const data = await HomeApi();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    addMovies();
  }, []);

  return (
    <div >
      <h2 >Trending today</h2>
      <ul >
        {movies.map(({ title, id }) => (
          <li  key={id}>
            <Link
              to={`movies/${id}`}
              state={{ from: location }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
