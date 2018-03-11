import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
	max-height: 200px;
    margin: 10px;
`

const GifCard = (item) => {
  return (
    <Image src={item.gif.images.downsized.url} />
  )
};

export default GifCard;