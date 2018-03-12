import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from './../store/configureStore';

import Home from '../containers/Home';
import NavBar from '../components/NavBar'
import GifItem from '../containers/GifItem'

import styled from 'styled-components';

const Container = styled.div`
        max-width: 1040px;
        margin: 0 auto;
        text-align: center;
    `
;

export default class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <NavBar />
                    <Container>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/random" component={ GifItem }/>
                        <Route exact path="/gif/:gifId" component={ GifItem }/>
                    </Container>
                </div>
            </ConnectedRouter>
        );
    }
}

//     background-color: #121212;
