export const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title ?? movie.name} </li>
        ))}
      </ul>
    </div>
  );
};
