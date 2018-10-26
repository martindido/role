import { combineEpics } from 'redux-observable';
import { increment, decrement } from './counter'
import login from './auth/login';
import logout from './auth/logout';
import setCurrentUser from './auth/setCurrentUser';
import unsetCurrentUser from './auth/unsetCurrentUser';
import establishCurrentUser from './auth/establishCurrentUser';
import getCurrentProfile from './profile/getCurrentProfile';

export const epics = combineEpics(
    increment,
    decrement,
    login,
    logout,
    setCurrentUser,
    unsetCurrentUser,
    establishCurrentUser,
    getCurrentProfile
);
