import { getTrending } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Header } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        setLoading(true);
        const trendMovies = await getTrending();
        setMovies(trendMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    trendingMovies();
  }, []);

  return (
    <div>
      <Header>Trending today</Header>
      <MoviesList movies={movies} />
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
    </div>
  );
}
