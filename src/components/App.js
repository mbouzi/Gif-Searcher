import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from './../store/configureStore';

import Home from '../containers/Home';
import NavBar from '../components/NavBar'
import GifItem from '../containers/GifItem'

export default class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <NavBar />
                    <div className="container">
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/random" component={ GifItem }/>
                        <Route exact path="/gif/:gifId" component={ GifItem }/>
                    </div>
                </div>
            </ConnectedRouter>
        );
    }
}

