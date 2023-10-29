import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Wrapper, Nav, Main, StyledHeader } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </StyledHeader>
      <Suspense fallback={'Loading...'}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Wrapper>
  );
};
