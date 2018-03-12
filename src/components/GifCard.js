import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'


const Image = styled.img`
	max-height: 200px;
    margin: 10px;
`



const GifCard = (props) => {

	return (
	 <Link to={{
	   pathname: `/gif/${props.gif.id}`,
	   state: { gif: props.gif }
	  }}>
	   <Image src={props.gif.images.downsized.url} />
	  </Link>
	)
};

export default withRouter(GifCard);