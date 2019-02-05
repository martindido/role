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
import signInSubmit from './submit/auth/signIn';
import signUpSubmit from './submit/auth/signUp';
import signUpConfirmSubmit from './submit/auth/signUpConfirm';
import createWorldSubmit from './submit/graphql/createWorld';
import updateWorldSubmit from './submit/graphql/updateWorld';
import createGameSubmit from './submit/graphql/createGame';
import updateGameSubmit from './submit/graphql/updateGame';
import uploadFile from './storage/uploadFile';

export const epics = combineEpics(
    signIn,
    signUp,
    signUpConfirm,
    authenticate,
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
    signInSubmit,
    signUpSubmit,
    signUpConfirmSubmit,
    createWorldSubmit,
    updateWorldSubmit,
    createGameSubmit,
    updateGameSubmit,
    uploadFile
);
