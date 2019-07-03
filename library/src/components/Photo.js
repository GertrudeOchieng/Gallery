import React from 'react';

const Photo = ({ author, id, image }) => {
  return (
    <div className='picture'>
      <img alt='' src={image} />
      <h2>{author}</h2>
      <p>{id}</p>
    </div>
  )
}

export default Photo;
