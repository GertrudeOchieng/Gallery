import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-auto-rows: 1fr;
  grid-row-gap: 80px;
  margin-right: 100px;
  margin-left: 100px;
  font-family: 'Kaushan Script', cursive;
`;
