import React from 'react';
import GifCard from './GifCard';
import styled from 'styled-components';

import { Grid } from 'semantic-ui-react'



const GifResults = (props) => {
    let data = props.gifs && props.gifs.data ? props.gifs.data : [],
        gifs = [],
        colors = [
            "red",
            "orange",
            "yellow",
            "olive",
            "green",
            "teal",
            "blue",
            "violet",
            "purple",
            "pink",
        ]
        ;
    

    if(data) {
        gifs = data.map((gif) => {
            let ImageContainer = styled.div`
                display: inline;
            `
            return (
              <Grid.Column>
                <ImageContainer>
    	    	        <GifCard 
    	    		          key={gif.id} 
    	    		          gif={gif}
                        color={colors[Math.floor(Math.random() * colors.length)]}
    	    	        />
    	          </ImageContainer>
                </Grid.Column>
        	  )
        });
    }

    return (
        <Grid columns={4}>
            <Grid.Row>
            <ul>{gifs}</ul>
            </Grid.Row>
        </Grid>
    );
};

export default GifResults;