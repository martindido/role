import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { auth, initialState as authInitialState } from './auth';
import { profile, initialState as profileInitialState } from './profile';
import { routing, initialState as routingInitialState } from './routing';
import { graphql, initialState as graphqlInitialState } from './graphql';
import { submit, initialState as submitInitialState } from './submit';

const reducers = {
    form,
    auth,
    profile,
    routing,
    graphql,
    submit
};

export const initialState = {
    auth: authInitialState,
    profile: profileInitialState,
    routing: routingInitialState,
    graphql: graphqlInitialState,
    submit: submitInitialState
};
export type Reducers = typeof reducers;
export default combineReducers(reducers);
