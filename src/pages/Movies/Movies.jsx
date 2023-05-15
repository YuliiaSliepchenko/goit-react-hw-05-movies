import { Link, useLocation,useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovieByQuery } from '../../helpers/movieApi';
import s from './Movies.module.css';
 
const Movies = () => {
    const [movies, setMovies] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const location = useLocation();
    const handleSubmit = e => {
        e.preventDefault();
        const searchQuery = e.currentTarget.elements.query.value;
        if (searchQuery === '') {
            return setSearchParams({});
        }
        setSearchParams({ query: searchQuery });
        e.currentTarget.elements.query.value = '';
    };
    useEffect(() => {
        query &&
            getSearchMovieByQuery(query)
                .then(response => {
                setMovies(response.results);
            })
                .catch(err => console.log(err));
    }, [query]);
    const markupMovies = () => {
        return (
            <ul className={s.li}>
                {movies &&
                    (movies.length > 0 ?
                        (movies.map(({ title, id }) => (
                            <Link
                                className={s.link}
                                key={id}
                                state={{ from: location }}
                                to={`${id}`}
                            >
                                <li>{title}</li>
                            </Link>
                        ))
                        ) : (
                            <p>Movies not found</p>
                        ))}
            </ul>  
        );      
    };
    return (
        <>
            <form className={s.form} onSubmit={handleSubmit}>
                <input className={s.input} type="text" name="query" required></input>
                <button className={s.submit} type='submit'>
                    Search
                </button>
            </form>
            {markupMovies()}
        </>
    );
};
  
export default Movies;