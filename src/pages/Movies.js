import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'api';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { RotatingLines } from 'react-loader-spinner';
import { SearchBar } from 'components/SearchBar/SearchBar';

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const query = params.get('query');

  const onSearch = q => {
    params.set('query', q);
    setParams(params);
  };

  useEffect(() => {
    const queryMovies = async () => {
      try {
        setLoading(true);
        const fetchedMovies = await getMovieByQuery(query);
        setMovies(fetchedMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    queryMovies();
  }, [query]);

  return (
    <header>
      <SearchBar onSubmit={onSearch} />
      {query && <MoviesList movies={movies} />}
      {movies.length === 0 && <p>No movies found.</p>}
      {loading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}

      {error && <p>Whoops! Something went wrong. Please reload the page.</p>}
    </header>
  );
}
