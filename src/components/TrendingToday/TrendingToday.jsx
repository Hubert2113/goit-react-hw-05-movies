import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TrendingToday.module.scss';

const TrendingToday = () => {
  let [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=a944d85c2c0e6d65800ba2ca920ee80d'
    )
      .then(response => response.json())
      .then(result => {
        setTrendingMovies(result.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul className={styles.movieList}>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link className={styles.movieListItem} to={`/movies/${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TrendingToday;
