import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-shadow: 1px 1px 11px rgba(0,0,0,0.2);

  h2 {
    padding: 10px 20px;
    margin: 0;
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
