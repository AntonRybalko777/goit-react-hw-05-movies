import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title ?? name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
