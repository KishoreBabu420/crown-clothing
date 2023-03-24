import styled from 'styled-components';

export const CategoryTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
`;
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  -moz-column-gap: 10px;
  column-gap: 10px;
  row-gap: 50px;
`;
