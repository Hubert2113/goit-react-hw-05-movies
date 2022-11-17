import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Cast.module.scss';


const Cast = () => {

    const { movieId } = useParams();
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a944d85c2c0e6d65800ba2ca920ee80d`)
        .then(respond => respond.json())
        .then(result => {
            setActors(result.cast);
        })
        .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section>
            <ul>
                {actors.map((actor) => {
                    return (
                        <li key={actor.credit_id}>
                            <img className={styles.characterImg} src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt="Actor"/>
                            <p className={styles.characterInformation}>{actor.name}</p>
                            <p className={styles.characterInformation}>Character: {actor.character}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Cast;