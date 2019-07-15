import React from 'react';

// import Album from 'components/Album';
import Gallery from 'components/Gallery';
import { Container } from './App.styles';

class App extends React.Component {
  // componentDidMount() {
  //   const photos = fetch('https://picsum.photos/v2/list')
  //     .then(response => response.json())
  //     .then(data => this.setState({ photos: data }));
  //
  //   console.log(photos);
  // }

  render() {
    return (
      <Container>
        <h1>Memory Book</h1>
        <Gallery />
      </Container>
    );
  }
}

export default App;
