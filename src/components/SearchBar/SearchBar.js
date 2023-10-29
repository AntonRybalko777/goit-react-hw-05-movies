export const SearchBar = ({ onSubmit }) => {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        onSubmit(evt.target.elements.search.value);
      }}
    >
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};
