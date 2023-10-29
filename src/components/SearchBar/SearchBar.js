import { BsSearch } from 'react-icons/bs';
import { Form, Button, Input } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={evt => {
        evt.preventDefault();
        onSubmit(evt.target.elements.search.value);
        evt.target.reset();
      }}
    >
      <Button type="submit">
        <span>
          <BsSearch />
        </span>
      </Button>
      <Input type="text" name="search" placeholder="Search movie" />
    </Form>
  );
};
