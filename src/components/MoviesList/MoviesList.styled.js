import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Li = styled.li`
  width: 200px;
  border: 1px solid #e7e9fc;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 5px;

  transition: 200ms ease-in;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  }
`;

export const Title = styled.p`
  margin: 10px 0;
  padding: 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
`;

export const Year = styled.p`
  color: #afafaf;
  font-size: 12px;
  padding: 0 10px;
`;

export const Img = styled.img`
  border-bottom: 1px solid #e7e9fc;
`;
