import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense } from 'react';

const Link = styled(NavLink)`
  margin-right: 5px;
  text-decoration: none;
  &.active {
    color: tomato;
  }
`;

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </div>
  );
};
