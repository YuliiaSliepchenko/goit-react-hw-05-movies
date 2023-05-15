import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTranding } from 'helpers/movieApi';
import s from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState();
  const location = useLocation();
  const homeMarkup = () => {
    return (
      <>
        <h1>Trending Today</h1>
        <ul className={s.li}>
          {movies.map(({ title, id }) => (
            <Link
              className={s.link}
              key={id}
              state={{ from: location }}
              to={`movies/${id}`}
            >
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      </>
    );
  };
  useEffect(() => {
    getTranding()
      .then(response => {
        setMovies(response.results);
      })
      .catch(err => console.log(err));
  }, []);
  return movies && homeMarkup();
};

export default Home;