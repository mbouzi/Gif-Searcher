import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar'
import GifList from './components/GifList'

import axios from 'axios'

class Searcher extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	gifs: []
    };
  }

  handleTermChange = (term) => {
    // this.setState({term: term});
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=RiGduUrtLWz4x36dI6ARDS8RkOZA7nDv`;
    axios.get(url)
	  .then((response) => {
	  	console.log("RESPONSE1:", response.data.data)
	    this.setState({ gifs: response.data.data })
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }

  render() {
    return (
      <div>
        <h1>Gif Searcher</h1>
        <SearchBar 
        	onTermChange={this.handleTermChange}
        />
        <GifList 
        	gifs={this.state.gifs}
        />
      </div>
    );
  }
}

ReactDOM.render(<Searcher/>, document.getElementById('app'));
