import React, { Component } from 'react';

import Photo from '../Photo';
import { Container } from './Album.styles';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const photos = fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => this.setState({ photos: data }));
    console.log(photos);
  }

  render() {
    const { photos } = this.state;

    return (
      <Container>
        {
          photos.map((pic) => {
            return (
              <Photo
                author={pic.author}
                image={pic.download_url}
                key={pic.id}
              />
            );
          })
        }
      </Container>
    );
  }
}

export default Album;
