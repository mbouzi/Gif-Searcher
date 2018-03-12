import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';
import GifResults from '../components/GifResults'

class Home extends React.Component {


  componentWillMount() {
    this.props.actions.requestTrendingGifs();
  }

  saveTerm = (input) => {
    console.log("INPUT:", input)
    this.props.actions.saveTerms(input)
  }

  render() {

    return (
      <div>
        <SearchBar terms={this.props.terms} handleKeyUp={this.saveTerm} onTermChange={this.props.actions.requestGifs} />
        <GifResults gifs={ this.props.gifs } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("STATE:", state)
  return {
    gifs: state.gifs.data,
    terms: state.terms
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
