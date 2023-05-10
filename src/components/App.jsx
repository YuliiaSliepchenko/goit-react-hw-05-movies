import { Route, Routes } from "react-router-dom";



export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='movies' element={<h1>Movies</h1>} />
      <Route path='movies/:movieId' element={<h1>MovieDetails</h1>} />
      <Route path='cast' element={<h1>Cast</h1>} />
      <Route path='reviews' element={<h1>Reviews</h1>} />
   </Routes>
  );
};
