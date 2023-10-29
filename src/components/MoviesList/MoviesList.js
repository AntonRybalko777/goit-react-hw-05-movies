import { Link, useLocation } from 'react-router-dom';
import { List, Li, Title, Year, Img } from './MoviesList.styled';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title, name, poster_path, release_date }) => (
          <Li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                alt="poster"
                width={200}
              />
              <Title>{title ?? name}</Title>
              <Year>{release_date && release_date.split('-')[0]}</Year>
            </Link>
          </Li>
        ))}
      </List>
    </div>
  );
};
