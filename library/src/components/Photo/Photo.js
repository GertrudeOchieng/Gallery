import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from './Photo.styles';

const Photo = ({ author, id, image }) => {
  const imageURL = image.split('/').map((s, i) => {
    if (i > 4) return 400;

    return s;
  }).join('/');

  return (
    <Container>
      <Image alt="" src={imageURL} />
      <h2>{author}</h2>
    </Container>
  );
};

Photo.propTypes = {
  author: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
};

export default Photo;
