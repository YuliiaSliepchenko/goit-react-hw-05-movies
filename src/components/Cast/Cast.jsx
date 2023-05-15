import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchCresitsById } from '../../helpers/movieApi';
import s from './Cast.module.css';
import noImage from '../../images/noImage.png'

const Cast = () => {
    const [actors, setActors] = useState();
    const { movieId } = useParams();

    useEffect(() => {
        movieId &&
            getSearchCresitsById(movieId)
                .then(res => {
                    setActors(res.cast);
                })
                .catch(err => console.log(err));
    }, [movieId]);
    
    const markupCast = () => {
        return (
            <ul>
                {actors.map((actor, idx) => (
          <li key={idx}>
                    <img
                       className={s.image}
                      src={
                        
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                  : noImage
              }
              alt={actor.name}
              loading="lazy"
              width="60"
              height="90"
            ></img>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
            </ul>
        );
    };
    return actors && markupCast();
};

export default Cast;