import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { auth, initialState as authInitialState } from './auth';
import { routing, initialState as routingInitialState } from './routing';
import { graphql, initialState as graphqlInitialState } from './graphql';
import { search, initialState as searchInitialState } from './search';

const reducers = {
    form,
    auth,
    routing,
    graphql,
    search
};

export const initialState = {
    auth: authInitialState,
    routing: routingInitialState,
    graphql: graphqlInitialState,
    search: searchInitialState
};
export type Reducers = typeof reducers;
export default combineReducers(reducers);
