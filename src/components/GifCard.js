import React from 'react';

const GifCard = (item) => {
	console.log("GIF:", item.gif)
  return (
    <div>
      <img src={item.gif.images.downsized.url} />
    </div>
  )
};

export default GifCard;