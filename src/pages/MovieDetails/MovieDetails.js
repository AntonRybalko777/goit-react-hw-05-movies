import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'api';
import { RotatingLines } from 'react-loader-spinner';
import { MdKeyboardReturn } from 'react-icons/md';
import {
  StyledLink,
  Span,
  MovieWrapper,
  InfoWrapper,
  Votes,
  GenreList,
  Genre,
  AddInfoHeader,
  StyledNavLink,
  AddInfoList,
  AddInfoItem,
} from './MovieDetails.styled';

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
      <StyledLink to={location.state?.from ?? '/'}>
        <MdKeyboardReturn /> <Span>Go back</Span>
      </StyledLink>
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
          <MovieWrapper>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt="poster"
              width={250}
            />
            <InfoWrapper>
              <h2>
                {movie.title && movie.original_title} (
                {movie.release_date.split('-')[0]})
              </h2>
              <p>
                User Score: <b> {movie.vote_average.toFixed(1) * 10} %</b>{' '}
                <Votes> ({movie.vote_count} votes)</Votes>
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <GenreList>
                {movie.genres.map(genre => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
              </GenreList>
            </InfoWrapper>
          </MovieWrapper>

          <AddInfoHeader>Additional information</AddInfoHeader>
          <AddInfoList>
            <AddInfoItem>
              <StyledNavLink to="cast">Cast</StyledNavLink>
            </AddInfoItem>
            <AddInfoItem>
              <StyledNavLink to="reviews">Reviews</StyledNavLink>
            </AddInfoItem>
          </AddInfoList>
        </>
      )}

      <Outlet />
    </div>
  );
}
