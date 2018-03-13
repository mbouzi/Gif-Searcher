import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Search from '../components/Search';
import GifResults from '../components/GifResults'

class Main extends React.Component {


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
                <Search term={this.props.term} terms={this.props.terms} handleKeyUp={this.saveTerm} onTermChange={this.onTermChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
