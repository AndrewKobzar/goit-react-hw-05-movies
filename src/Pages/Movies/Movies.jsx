import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { MovieSearchApi } from 'components/Servise/MovieApi';
import SearchBox from 'components/SearchBox/SearchForm';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const searchMovie = async () => {
      try {
        const data = await MovieSearchApi(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchMovie();
  }, [query]);

  useEffect(() => {
    if (!value) {
      return;
    }
    const searchMovie = async () => {
      try {
        const data = await MovieSearchApi(value);
        if (data.results.length === 0) {
          alert(`no response on request ${value}`);
          return;
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    searchMovie();
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();

    setValue(e.target.elements.query.value);
    setSearchParams(
      value !== '' ? {} : { query: e.target.elements.query.value }
    );
    e.target.elements.query.value = '';
  };

  return (
    <div >
      {movies && <SearchBox handleSubmit={handleSubmit} />}
      <ul >
        {movies.map(({ title, id }) => (
          <li  key={id}>
            <Link  to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
