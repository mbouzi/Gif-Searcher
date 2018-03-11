import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar'
import GifList from './components/GifList'

class Searcher extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    	gifs: []
    };
  }
  handleChange = (event) => {
    this.setState({name: event.target.value});
  }
  render() {
    return (
      <div>
        <h1>Gif Searcher</h1>
        <SearchBar 
        	onTermChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<Searcher/>, document.getElementById('app'));
