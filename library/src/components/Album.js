import React, { Component } from 'react';
import Photo from './Photo';
import './styles.css';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }



  componentDidMount() {
    const photos = fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => this.setState({ photos: data }));
      console.log(photos);

  }

  render() {
    console.log(this.state);

    return (
      <div className='album'>
        {
          this.state.photos.map((pic) => {
            return (
              <Photo
                author = {pic.author}
                image = {pic.download_url}
                key = {pic.id}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Album;
