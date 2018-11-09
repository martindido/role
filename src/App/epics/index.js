import { combineEpics } from 'redux-observable';
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
import getWorld from './graphql/getWorld';

export const epics = combineEpics(
    signIn,
    signUp,
    signUpConfirm,
    signOut,
    setCurrentUser,
    unsetCurrentUser,
    establishCurrentUser,
    getCurrentProfile,
    getWorlds,
    createWorld,
    getWorld
);
