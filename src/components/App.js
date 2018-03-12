import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from './../store/configureStore';

import Main from '../containers/Main';
import NavBar from '../components/NavBar'
import GifContainer from '../containers/GifContainer'

import styled from 'styled-components';

const Container = styled.div`
        max-width: 1040px;
        margin: 0 auto;
        text-align: center;
    `
;

class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <NavBar />
                    <Container>
                        <Route exact path="/" component={ Main }/>
                         <Route exact path="/random" component={ GifContainer }/>
                        <Route exact path="/gif/:gifId" component={GifContainer} />
                    </Container>
                </div>
            </ConnectedRouter>
        );
    }
}


export default App;
