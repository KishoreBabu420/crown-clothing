import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  -moz-column-gap: 20px;
  column-gap: 20px;
`;
export const Title = styled.h2`
  display: inline-block;
  font-size: 28px;
  margin-bottom: 2rem;
  cursor: pointer;
`;
