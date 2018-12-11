import { createStore, applyMiddleware, compose } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import reducers, { initialState as reducersInitialState } from './App/reducers/index';
import { epics } from './App/epics';

export default (url: string = '/') => {
    const history = getHistory(url);
    const epicMiddleware = createEpicMiddleware();
    const middlewares = [epicMiddleware, routerMiddleware(history)];
    const enhancers = getInitialEnhancers();
    const composedEnhancers = composeEnhancers(middlewares, enhancers);
    const initialState = getInitialState();
    const store = createStore(
        connectRouter(history)(reducers),
        initialState,
        composedEnhancers
    );

    epicMiddleware.run(epics);
    return {
        store,
        history
    };
}

export const isServer = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

function getHistory(url) {
    return isServer
        ? createMemoryHistory({
            initialEntries: [url]
        })
        : createBrowserHistory();
}

function getInitialEnhancers() {
    const enhancers = [];

    if (isServer
        || process.env.NODE_ENV !== 'development'
        || typeof window.devToolsExtension !== 'function') {
        return enhancers;
    }
    enhancers.push(window.devToolsExtension());
    return enhancers;
}

function composeEnhancers(middlewares, enhancers) {
    return compose(
        applyMiddleware(...middlewares),
        ...enhancers
    );
}

function getInitialState() {
    if (isServer) {
        return reducersInitialState;
    }
    const initialState = window.__PRELOADED_STATE__;

    delete window.__PRELOADED_STATE__;
    return initialState;
}
