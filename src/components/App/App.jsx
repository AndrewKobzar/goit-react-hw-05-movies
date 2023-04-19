import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import MoviesDetails from '../MoviesDetails/MoviesDetails';

const Home = lazy(() => import('Pages/Home/Home'));
const Movies = lazy(() => import('Pages/Movies/Movies'));
const NotFound = lazy(() => import('Pages/NotFound'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={
              <Suspense fallback={<h2>loading...</h2>}>
                <MoviesDetails />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
