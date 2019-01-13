import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { auth, initialState as authInitialState } from './auth';
import { routing, initialState as routingInitialState } from './routing';
import { graphql, initialState as graphqlInitialState } from './graphql';
import { search, initialState as searchInitialState } from './search';

import type { BrowserHistory } from 'history/createBrowserHistory';
import type { CombinedReducer } from 'redux';

export type Reducers = Object;

export const initialState = {
    auth: authInitialState,
    routing: routingInitialState,
    graphql: graphqlInitialState,
    search: searchInitialState
};
export default (history: BrowserHistory): CombinedReducer<Object, Object> => combineReducers(reducers(history));

function reducers(history) {
    return {
        router: connectRouter(history),
        form,
        auth,
        routing,
        graphql,
        search
    };
}
