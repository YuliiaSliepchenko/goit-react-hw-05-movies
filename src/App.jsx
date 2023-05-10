import {Navigate, Outlet, Route, Routes } from "react-router-dom";



import Home from './pages/Home/Home';
import Header from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MoviesDetails from './pages/MovieDetails/MovieDetails';

import Cast from './components/Cast/Cast';
// import MainLayout from '../components/MainLayout/MainLayout';
import Reviews from './components/Reviews/Reviews';

const MainLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};


const App = () => {
  return (
    <>
   <Routes>
       <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='movies/:movieId' element={<MoviesDetails/>}/>
      <Route path='cast' element={<Cast/>}/>
      <Route path='reviews' element={<Reviews />} />
        </Route>
       <Route path='*' element={<Navigate to='/'/>}/> 
    </Routes>
      </>
  );
};
export default App;