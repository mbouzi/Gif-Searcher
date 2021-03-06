import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import GifCard from '../components/GifCard'


class GifContainer extends React.Component {

  componentWillMount() {
      if(this.props.location.state && this.props.location.state.gif && this.props.location.state.gif.id) {
          this.props.actions.requestGif(this.props.location.state.gif.id)
      } else {
        this.props.actions.requestRandomGif()
      }
  }


  render() {

        return (
            <div>
                <GifCard gif={ this.props.gif} />
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

export default connect(mapStateToProps, mapDispatchToProps)(GifContainer);
