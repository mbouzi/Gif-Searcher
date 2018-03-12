import React from 'react';
import GifCard from './GifCard';
import styled from 'styled-components';


const Div = styled.div`
	display: inline
`

const GifResults = (props) => {
  let data = props.gifs && props.gifs.data ? props.gifs.data : [],
      gifs = []

      console.log("RESULTPROPS:", props)

  if(data) {
    gifs = data.map((gif) => {
      return (
        <Div>
  	    	<GifCard 
  	    		key={gif.id} 
  	    		gif={gif} 
  	    	/>
  	    </Div>
      	)
    });
  }

  return (
    <ul>{gifs}</ul>
  );
};

export default GifResults;