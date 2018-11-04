import { combineEpics } from 'redux-observable';
import { increment, decrement } from './counter'
import signIn from './auth/signIn';
import signUp from './auth/signUp';
import signUpConfirm from './auth/signUpConfirm';
import signOut from './auth/signOut';
import setCurrentUser from './auth/setCurrentUser';
import unsetCurrentUser from './auth/unsetCurrentUser';
import establishCurrentUser from './auth/establishCurrentUser';
import getCurrentProfile from './profile/getCurrentProfile';
import getWorlds from './graphql/getWorlds';
import createWorld from './graphql/createWorld';

export const epics = combineEpics(
    increment,
    decrement,
    signIn,
    signUp,
    signUpConfirm,
    signOut,
    setCurrentUser,
    unsetCurrentUser,
    establishCurrentUser,
    getCurrentProfile,
    getWorlds,
    createWorld
);
