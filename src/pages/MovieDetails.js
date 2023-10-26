import { Link, Outlet } from 'react-router-dom';

export default function MovieDetails() {
  return (
    <div>
      <h2>THIS IS MOVIE INFO</h2>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}
