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
      this.props.actions.storeTerms(input)
  }

  onTermChange = (input) => {
      this.props.actions.requestGifs(input)
      this.props.actions.displayTerm(input)
  }

  render() {

      return (
            <div>
                <SearchBar term={this.props.term} terms={this.props.terms} handleKeyUp={this.saveTerm} onTermChange={this.onTermChange} />
                <GifResults gifs={ this.props.gifs } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gifs: state.gifs.data,
        terms: state.terms,
        term: state.terms.term
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
