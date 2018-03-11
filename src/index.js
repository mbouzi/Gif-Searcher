import React from 'react';
import ReactDOM from 'react-dom';

class Searcher extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: 'Search'};
  }
  handleChange(e) {
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div>
        <h1>Gif Searcher</h1>
        <input 
        	placeholder="Search Gif" 
        	onChange={this.handleChange} 
        	defaultValue={this.state.name}
        />
      </div>
    );
  }
}

ReactDOM.render(<Searcher/>, document.getElementById('app'));
