import React, { Component } from 'react';

import { Container, AlbumPic } from './Gallery.styles';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    fetch('https://my.api.mockaroo.com/albums.json?key=ee73a500')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }

  render() {
    const { albums } = this.state;

    return (
      <Container>
        {albums.map((album) => {
          const randomColor = `#${Math.random().toString(16).substr(-6)}`;

          return (
            <div key={album.id}>
              <AlbumPic bgColor={randomColor}>
                <img src={album.featured_image} alt="album" />
              </AlbumPic>
              <h2>{album.title}</h2>
            </div>

          );
        })}
      </Container>
    );
  }
}
export default Gallery;
