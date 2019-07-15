import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 60px;

  h2 {
    padding: 15px 20px;
    margin: 0;
    font-size: 16px;
    font-family: 'Kaushan Script', cursive;
  }
`;

export const AlbumPic = styled.div`
  z-index: 10;
  position: relative;

  &:before, &:after {
    border-radius: 3px;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border: 10px solid #fff;
    left: 0;
    box-sizing: border-box;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transition: 0.3s all ease-out;
  }
  &:before {
    top: 4px;
    z-index: -10;
  }

  &:after {
    top: 8px;
    z-index: -20;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    border: 10px solid #fff;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    background: ${props => props.bgColor};
  }
`;
