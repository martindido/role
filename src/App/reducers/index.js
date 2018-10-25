import { combineReducers } from 'redux';
import { counter, initialState as counterInitialState } from './counter';

const reducers = {
    counter
};

export const initialState = {
    counter: counterInitialState
};
export type Reducers = typeof reducers;
export default combineReducers(reducers);
