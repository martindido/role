import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { localizeReducer } from 'react-localize-redux';
import { auth, initialState as authInitialState } from './auth';
import { routing, initialState as routingInitialState } from './routing';
import { graphql, initialState as graphqlInitialState } from './graphql';
import { search, initialState as searchInitialState } from './search';

import type { BrowserHistory } from 'history/createBrowserHistory';
import type { CombinedReducer } from 'redux';
import type { State } from '../types/State';
import type { Action } from '../types/Action';
import type { LocalizedReducer } from '../types/Locale';
import type { ConnectedRouter } from 'connected-react-router';
import type { FormReducer } from 'redux-form';

export type Reducers = {
    localize: LocalizedReducer,
    router: ConnectedRouter,
    form: FormReducer,
    auth: typeof auth,
    routing: typeof routing,
    graphql: typeof graphql,
    search: typeof search
};

export const initialState: State = {
    localize: undefined,
    router: undefined,
    form: undefined,
    auth: authInitialState,
    routing: routingInitialState,
    graphql: graphqlInitialState,
    search: searchInitialState
};
export default (history: BrowserHistory): CombinedReducer<State, Action> => combineReducers(reducers(history));

function reducers(history: BrowserHistory): Reducers {
    return {
        localize: localizeReducer,
        router: connectRouter(history),
        form,
        auth,
        routing,
        graphql,
        search
    };
}
