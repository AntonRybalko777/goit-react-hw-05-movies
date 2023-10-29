import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({ id, title, name, release_date }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title ?? name} ({release_date && release_date.split('-')[0]})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
