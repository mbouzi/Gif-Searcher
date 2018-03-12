import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import GifCard from '../components/GifResults'

import { history } from '../store/configureStore';


class GifItem extends React.Component {

  componentWillMount() {
    this.props.actions.requestRandomGif()
  }


  render() {
  

    return (
      <div>
        <GifCard gifItem={ this.props.gifs} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("STATE:", state)
  return {
    gifs: state.gifs.data
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapDispatchToProps)(GifItem);
