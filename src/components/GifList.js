import React from 'react';
import GifCard from './GifCard';

const GifList = (props) => {
  
  const gifs = props.gifs.map((gif, index) => {
    return <GifCard key={index} gif={gif} />
  });

  return (
    <ul>{gifs}</ul>
  );
};

export default GifList;