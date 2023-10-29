import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'api';
import { RotatingLines } from 'react-loader-spinner';
import { MdKeyboardReturn } from 'react-icons/md';

export default function MovieDetails() {
  const params = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const fetchedMovieDetails = await getMovieById(params.movieId);
        setMovie(fetchedMovieDetails);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovieDetails();
  }, [params.movieId, movie.release_date]);

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>
        <MdKeyboardReturn />
        Go back
      </Link>
      {loading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {error && <p>Whoops! Looks like we couldn't find this movie.</p>}
      {movie.id && (
        <>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt="poster"
            width={250}
          />
          <h2>
            {movie.title && movie.original_title} (
            {movie.release_date.split('-')[0]})
          </h2>
          <p>User Score: {movie.vote_average.toFixed(1) * 10} %</p>
          <h3>Overview</h3>
          {movie.overview}
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>

          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </>
      )}

      <Outlet />
    </div>
  );
}
