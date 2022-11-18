import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LeftArrow } from '@styled-icons/boxicons-regular/LeftArrow';
import styles from './MovieDetails.module.scss';

const ArrowLeft = styled(LeftArrow)`
  color: black;
  width: 15px;
  height: 15px;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  let navigate = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a944d85c2c0e6d65800ba2ca920ee80d`
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setMovie(result);
      })
      .catch(error => console.log(error));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
        <section className={styles.movieInformation}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <Link className={styles.goBackBtn} to={navigate.state?.from ?? "/goit-react-hw-05-movies/"}>
              <ArrowLeft />
              Go back
            </Link>
            {console.log(movie)}
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {Math.floor(movie.vote_average) * 10}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres?.map((genre) => (genre.name + ' '))}</p>
          </div>
        </section>
        <section className={styles.additionalInformation}>
            <h5>Additional information</h5>
            <ul>
                <li><Link className={styles.additionalInformationLink} to='cast'>Cast</Link></li>
                <li><Link className={styles.additionalInformationLink} to='reviews'>Reviews</Link></li>
            </ul>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet/>
        </Suspense>
    </>
  );
};

export default MovieDetails;
