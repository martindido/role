import { combineEpics } from 'redux-observable';
import { increment, decrement } from './counter'
import login from './auth/login';
import setCurrentUser from './auth/setCurrentUser';
import establishCurrentUser from './auth/establishCurrentUser';

export const epics = combineEpics(
    increment,
    decrement,
    login,
    setCurrentUser,
    establishCurrentUser
);
