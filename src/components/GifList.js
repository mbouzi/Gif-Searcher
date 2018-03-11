import React from 'react';
import GifCard from './GifCard';

const GifList = (props) => {
  
  const gifs = props.gifs.map((gif) => {
    return (
	    		<GifCard 
	    			key={gif.id} 
	    			gif={gif} 
	    		/>
    		)
  });

  return (
    <ul>{gifs}</ul>
  );
};

export default GifList;