import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Header from 'components/Header/Header';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import TrendingToday from 'components/TrendingToday/TrendingToday';
import MoviesPage from 'components/MoviesPage/MoviesPage';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));


export const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<TrendingToday/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/movies/:movieId' element={<MovieDetails/>}>
          <Route path='cast' element={<Cast/>} />
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='*' element/>
      </Routes>
    </>
  );
};
