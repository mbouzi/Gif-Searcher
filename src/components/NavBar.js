import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Icon} from 'semantic-ui-react'
import styled from 'styled-components';

const Title = styled.h1`
    color: orange
`

class NavBar extends React.Component {
    render() {
        return (
            <Header as='h2' icon textAlign='center'>
                <Icon color="yellow" name='find' circular />
                <Header.Content>
                    <Link to='/'><Title>Gif Searcher</Title></Link>
                </Header.Content>
            </Header>
        );
    }
}


export default NavBar;