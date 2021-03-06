import rootReducer from '../reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();

export function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        compose (
            applyMiddleware(ReduxPromise, routerMiddleware(history)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) { 
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
