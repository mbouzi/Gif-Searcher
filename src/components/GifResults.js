import React from 'react';
import GifCard from './GifCard';
import styled from 'styled-components';


const ImageContainer = styled.div`
    display: inline;

`

    // box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 ${colors[Math.floor(Math.random() * colors.length)]}, 0 1px 3px 0 #d4d4d5;

const GifResults = (props) => {
    let data = props.gifs && props.gifs.data ? props.gifs.data : [],
        gifs = [];
        // colors = [
        //     "red",
        //     "orange",
        //     "yellow",
        //     "olive",
        //     "green",
        //     "teal",
        //     "blue",
        //     "violet",
        //     "purple",
        //     "pink",
        // ]
    

    if(data) {
        gifs = data.map((gif) => {
            // const ImageContainer = styled.div`
            //     display: inline;
            //     box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 ${colors[Math.floor(Math.random() * colors.length)]}, 0 1px 3px 0 #d4d4d5;

            // `
            return (
                <ImageContainer>
    	    	        <GifCard 
    	    		          key={gif.id} 
    	    		          gif={gif}
    	    	        />
    	          </ImageContainer>
        	  )
        });
    }

    return (
        <ul>{gifs}</ul>
    );
};

export default GifResults;