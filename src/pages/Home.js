import { getTrending } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const trendMovies = await getTrending();
        setMovies(trendMovies.results);
      } catch (error) {
        console.log(error);
      }
    };

    trendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </div>
  );
}
