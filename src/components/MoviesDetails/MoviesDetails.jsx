import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams, NavLink } from 'react-router-dom';
import { getMovieDetails, getImages } from '../Servise/MovieApi';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [imageData, setImageData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const savedNavigate = useRef(location.state?.from);

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId, '');
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    const images = async () => {
      try {
        const dataImg = await getImages();
        setImageData(dataImg.images);
      } catch (error) {
        console.log(error.message);
      }
    };
    images();
    movieDetails();
  }, [movieId]);

  if (!movie || !imageData) {
    return null;
  }

  const handleGoBack = () => {
    navigate(savedNavigate.current);
  };

  return (
    <>
      <button onClick={handleGoBack} type="button">
        Go Back
      </button>

      <MovieInfo movie={movie} imageData={imageData} />
      <div>
        <h2>Aditional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
