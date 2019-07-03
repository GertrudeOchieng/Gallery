import React from 'react';
import Photo from '../components/Photo';
import Album from '../components/Album';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Our Gallery</h1>
      </header>
      <Album />
      <Photo />
    </div>
  );
}

export default App;
