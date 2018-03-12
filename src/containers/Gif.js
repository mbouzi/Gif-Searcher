import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import GifCard from '../components/GifResults'

class Gif extends React.Component {

  componentWillMount() {
    this.setState({
      gif: this.props.actions.requestRandomGif()
    })
  }

  render() {
    console.log("GIF:", this.state.gif)
    return (
      <div>
        <GifCard gif={ this.state.gif} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gif: state.gif.data
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapDispatchToProps)(Gif);
