import defaultImage from '../../images/defaultImage.jpg';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useRef, useState, useEffect } from 'react';
import { getSearcMovieById } from 'helpers/movieApi';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    movieId &&
      getSearcMovieById(movieId)
        .then(res => {
          setMovie({ ...res });
        })
        .catch(err => console.log(err));
  }, [movieId]);

  const movieDetailsMarkup = () => {
    return (
      <div>
        <div className={s.wrapper}>
          <img
            className={s.image}
            src={
              movie.poster_path &&
              (`https://image.tmdb.org/t/p/w342${movie.poster_path}` ??
                defaultImage)
            }
            alt={movie.title}
            loading="lazy"
            width="300"
            height="450"
          ></img>
          <div>
            <h1>{movie.title}</h1>
            <p>User Score {Math.round(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>
              {movie?.genres?.map(({ name }, idx) => (
                <span key={idx}>{name} </span>
              ))}
            </p>
          </div>
        </div>
        <div>
          <h3>Additional Information</h3>
          <ul className={s.li}>
            <li>
              <Link className={s.link} to="cast">
                Cast
              </Link>
            </li>

            <li>
              <Link className={s.link} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    );
  };
  return (
    <>
      <Link to={goBackRef.current}>
        <button className={s.goback} type="button">
          Go back
        </button>
      </Link>
      {movie ? movieDetailsMarkup() : <p>Loading.....</p>}
    </>
  );
};

export default MovieDetails;