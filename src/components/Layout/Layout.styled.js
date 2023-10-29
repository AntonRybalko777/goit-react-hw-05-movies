import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 5px;
  padding: 5px 50px;

  font-size: 18px;
  font-weight: bold;
`;

export const Main = styled.main`
  margin-top: 60px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  transition: 200ms ease-in;
  padding: 5px;

  &.active {
    color: tomato;
  }

  &:hover,
  &:focus {
  }
`;

export const Wrapper = styled.div`
  padding: 0 50px 40px 50px;
  margin: 0 auto;
`;

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 2000;
  opacity: 0.95;
  top: 0;
  left: 0;
  background-color: #fff9f9;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;
