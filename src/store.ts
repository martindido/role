import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { epics } from './App/epics';
import createRootReducer, { initialState as reducersInitialState } from './App/reducers';
import { State } from './App/types/State';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (...x: any) => any;
        __PRELOADED_STATE__: State;
        devToolsExtension(): StoreEnhancer;
    }
}

export const isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
export const isEnvironmentDevelopment = process.env.NODE_ENV !== 'development';

const composeEnhancers = (!isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const withDevTools = isServer && isEnvironmentDevelopment && typeof window.devToolsExtension !== 'function';
const enhancers: StoreEnhancer[] = withDevTools ? [window.devToolsExtension()] : [];

export default (url: string = '/') => {
    const history = getHistory(url);
    const epicMiddleware = createEpicMiddleware();
    const middlewares = [epicMiddleware, routerMiddleware(history)];
    const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares), ...enhancers);
    const initialState = getInitialState();
    const store = createStore(createRootReducer(history), initialState, composedEnhancers);

    epicMiddleware.run(epics);
    return {
        store,
        history
    };
};

function getHistory(url: string) {
    return isServer
        ? createMemoryHistory({
              initialEntries: [url]
          })
        : createBrowserHistory();
}

function getInitialState() {
    if (isServer) {
        return reducersInitialState;
    }
    const initialState = window.__PRELOADED_STATE__;

    delete window.__PRELOADED_STATE__;
    return initialState;
}
