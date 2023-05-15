import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import MainLayout from './MainLayout/MainLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));


const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));


// import Home from '../pages/Home/Home';
// import Header from './pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import MoviesDetails from '../pages/MovieDetails/MovieDetails';

// import Cast from './Cast/Cast';
// import MainLayout from '../components/MainLayout/MainLayout';
// import Reviews from './Reviews/Reviews';




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;