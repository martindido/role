import { combineEpics } from 'redux-observable';
import signIn from './auth/signIn';
import signUp from './auth/signUp';
import signUpConfirm from './auth/signUpConfirm';
import authenticate from './auth/authenticate';
import signOut from './auth/signOut';
import listWorlds from './graphql/listWorlds';
import createWorld from './graphql/createWorld';
import updateWorld from './graphql/updateWorld';
import createGame from './graphql/createGame';
import updateGame from './graphql/updateGame';
import loadWorlds from './load/graphql/listWorlds';
import loadWorld from './load/graphql/getWorld';
import loadGame from './load/graphql/getGame';
import getWorld from './graphql/getWorld';
import getGame from './graphql/getGame';
import search from './graphql/search';
import authenticateSync from './sync/auth/authenticate';
import signInSync from './sync/auth/signIn';
import signUpSync from './sync/auth/signUp';
import signUpConfirmSync from './sync/auth/signUpConfirm';
import createWorldSync from './sync/graphql/createWorld';
import updateWorldSync from './sync/graphql/updateWorld';
import createGameSync from './sync/graphql/createGame';
import updateGameSync from './sync/graphql/updateGame';
import getCurrentLanguageSync from './sync/locale/getCurrentLanguage';
import uploadFile from './storage/uploadFile';
import setCurrentLanguage from './locale/setCurrentLanguage';
import getCurrentLanguage from './locale/getCurrentLanguage';

export const epics = combineEpics(
    authenticate,
    signIn,
    signUp,
    signUpConfirm,
    signOut,
    listWorlds,
    createWorld,
    updateWorld,
    createGame,
    updateGame,
    loadWorlds,
    loadWorld,
    getWorld,
    loadGame,
    getGame,
    search,
    authenticateSync,
    signInSync,
    signUpSync,
    signUpConfirmSync,
    createWorldSync,
    updateWorldSync,
    createGameSync,
    updateGameSync,
    getCurrentLanguageSync,
    uploadFile,
    setCurrentLanguage,
    getCurrentLanguage
);
