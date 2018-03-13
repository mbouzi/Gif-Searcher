import React from 'react';
import styled from 'styled-components';
// import { Link, withRouter} from 'react-router-dom'


const GifCard = (props) => {
	const Image = styled.img`
		height: 200px;
		width: 290px;
	    margin: 10px;
	    box-shadow: 0 0 0 1px rgba(212, 212, 213, 0.1), 0 4px 0 0 ${props.color}, 0 1px 3px 0 rgba(212, 212, 213, 0.1)
	`
	// const pathname: `/gif/${props.gif.id}`	

	return (
	   <Image src={props.gif.images.downsized.url} />
	)
};

export default (GifCard);