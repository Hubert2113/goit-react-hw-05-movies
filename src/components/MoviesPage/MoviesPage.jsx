import styles from './MoviesPage.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleInputChange = ev => {
    setInputValue(ev.target.value);
  };

  const submitMovieSearchValue = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a944d85c2c0e6d65800ba2ca920ee80d&query=${inputValue}`
    )
      .then(respond => respond.json())
      .then(result => {
        setSearchedMovies(result.results);
      })
      .catch(error => console.log(error));
  };

  return (
    <section>
      <input
        onChange={handleInputChange}
        className={styles.movieSearchInput}
        type="text"
      />
      <button
        onClick={submitMovieSearchValue}
        className={styles.movieSearchBtn}
      >
        Search
      </button>
      {searchedMovies.length > 0 && (
        <ul>
          {searchedMovies.map(movie => {
            return (
              <li>
                <Link
                  className={styles.movieListItem}
                  to={`/movies/${movie.id}`}
                >
                  {movie.title ? movie.title : movie.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default MoviesPage;
