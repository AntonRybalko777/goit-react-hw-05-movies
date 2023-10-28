import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'api';

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const query = params.get('query');

  const onSearch = q => {
    params.set('query', q);
    setParams(params);
  };
  return (
    <header>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          onSearch(evt.target.elements.search.value);
        }}
      >
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
