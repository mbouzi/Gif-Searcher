import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'




const GifCard = (props) => {
	const Image = styled.img`
		max-height: 200px;
	    margin: 10px;
	    box-shadow: 0 0 0 1px rgba(212, 212, 213, 0.1), 0 4px 0 0 ${props.color}, 0 1px 3px 0 rgba(212, 212, 213, 0.1)
	`


	console.log("PROPS GIF:", props)
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