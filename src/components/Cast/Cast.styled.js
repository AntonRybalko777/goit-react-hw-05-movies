import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const Li = styled.li`
  width: 150px;
  border: 1px solid #e7e9fc;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 5px;

  h3 {
    font-size: 15px;
    margin: 5px;
  }

  p {
    color: grey;
    font-size: 12px;
    margin: 5px;
  }
`;
