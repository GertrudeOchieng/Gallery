import styled from 'styled-components/macro';

export const Container = styled.div`
  z-index: 10;
  position: relative;
  display: inline-block;

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
  }
`;
