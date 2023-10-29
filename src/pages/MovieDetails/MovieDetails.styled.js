import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  max-width: 100px;
  gap: 5px;
  justify-content: center;

  margin-bottom: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 2px;
  color: grey;
  transition: 200ms ease-in;

  &:hover,
  &focus {
    color: black;
    border-color: black;
  }
`;

export const Span = styled.span`
  text-transform: uppercase;
  font-size: 14px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

export const InfoWrapper = styled.div`
  h2 {
    margin-bottom: 40px;
  }

  p,
  h3 {
    margin-bottom: 10px;
  }

  h2,
  h3 {
    color: tomato;
  }
`;

export const Votes = styled.span`
  font-size: 12px;
  color: #7f7f7f;
`;

export const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Genre = styled.li`
  border: 1px solid #ff6347;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
`;

export const AddInfoHeader = styled.p`
  color: #ff6347;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0;
  margin: 0;
  transition: 200ms ease-in;
  &.active {
    color: tomato;
  }
`;

export const AddInfoList = styled.ul`
  display: flex;
  margin-bottom: 20px;
  gap: 15px;
`;

export const AddInfoItem = styled.li`
  padding: 5px 10px;
  border: 1px solid #ff6347;
  border-radius: 5px;
  transition: 200ms ease-in;

  &:hover,
  &:focus {
    background-color: #f5f5f5;
  }
`;
