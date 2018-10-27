import { combineEpics } from 'redux-observable';
import { increment, decrement } from './counter'
import signIn from './auth/signIn';
import signUp from './auth/signUp';
import signUpValidate from './auth/signUpValidate';
import logout from './auth/logout';
import setCurrentUser from './auth/setCurrentUser';
import unsetCurrentUser from './auth/unsetCurrentUser';
import establishCurrentUser from './auth/establishCurrentUser';
import getCurrentProfile from './profile/getCurrentProfile';

export const epics = combineEpics(
    increment,
    decrement,
    signIn,
    signUp,
    signUpValidate,
    logout,
    setCurrentUser,
    unsetCurrentUser,
    establishCurrentUser,
    getCurrentProfile
);
