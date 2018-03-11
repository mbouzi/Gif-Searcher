import React from 'react';
import GifCard from './GifCard';
import styled from 'styled-components';

const Div = styled.div`
	display: inline
`

const GifList = (props) => {
  
  const gifs = props.gifs.map((gif) => {
    return (<Div>
	    		<GifCard 
	    			key={gif.id} 
	    			gif={gif} 
	    		/>
	    	</Div>
    		)
  });

  return (
    <ul>{gifs}</ul>
  );
};

export default GifList;