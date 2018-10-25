import { combineReducers } from 'redux';
import { counter, initialState as counterInitialState } from './counter';
import { auth, initialState as authInitialState } from './auth';

const reducers = {
    counter,
    auth
};

export const initialState = {
    counter: counterInitialState,
    auth: authInitialState
};
export type Reducers = typeof reducers;
export default combineReducers(reducers);
