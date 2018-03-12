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

  render() {


    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifResults gifs={ this.props.gifs } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
