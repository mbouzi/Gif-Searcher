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

  handleTermChange = (term) => {
    this.setState({term: term});
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
