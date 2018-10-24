import { combineEpics } from 'redux-observable';
import { increment, decrement } from './counter'

export const epics = combineEpics(
    increment,
    decrement
);
