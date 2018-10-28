import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { counter, initialState as counterInitialState } from './counter';
import { auth, initialState as authInitialState } from './auth';
import { profile, initialState as profileInitialState } from './profile';
import { routing, initialState as routingInitialState } from './routing';
import { graphql, initialState as graphqlInitialState } from './graphql';

const reducers = {
    form,
    counter,
    auth,
    profile,
    routing,
    graphql
};

export const initialState = {
    counter: counterInitialState,
    auth: authInitialState,
    profile: profileInitialState,
    routing: routingInitialState,
    graphql: graphqlInitialState
};
export type Reducers = typeof reducers;
export default combineReducers(reducers);
