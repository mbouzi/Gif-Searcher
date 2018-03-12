import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
	max-height: 200px;
    margin: 10px;
`

const onImageClick = () => this.props.onGifClick


const GifCard = ({gif}) => {
  return (
    <Image onClick={this.onImageClick} src={gif.images.downsized.url} />
  )
};

export default GifCard;