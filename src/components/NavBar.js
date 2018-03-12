import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Segment} from 'semantic-ui-react'


class NavBar extends React.Component {
    render() {
        return (
            <Segment>
                <Header as='h3' textAlign='left'>
                    <Link to='/'>Home</Link>
                     <Link to='/random'>Random</Link>
                </Header>
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(NavBar);