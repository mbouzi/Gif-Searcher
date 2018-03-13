import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment} from 'semantic-ui-react'


class NavBar extends React.Component {
    render() {
        return (
            <Segment>
                <Header textAlign='center'>
                    <Link to='/'><img src="../images/giphy-logo.png" /></Link>
                </Header>
            </Segment>
        );
    }
}


export default NavBar;