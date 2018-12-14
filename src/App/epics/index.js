import { combineEpics } from 'redux-observable';
import signIn from './auth/signIn';
import signUp from './auth/signUp';
import signUpConfirm from './auth/signUpConfirm';
import signOut from './auth/signOut';
import setCurrentUser from './auth/setCurrentUser';
import unsetCurrentUser from './auth/unsetCurrentUser';
import establishCurrentUser from './auth/establishCurrentUser';
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
import createWorldSubmit from './submit/graphql/createWorld';
import updateWorldSubmit from './submit/graphql/updateWorld';
import createGameSubmit from './submit/graphql/createGame';
import updateGameSubmit from './submit/graphql/updateGame';

export const epics = combineEpics(
    signIn,
    signUp,
    signUpConfirm,
    signOut,
    setCurrentUser,
    unsetCurrentUser,
    establishCurrentUser,
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
    createWorldSubmit,
    updateWorldSubmit,
    createGameSubmit,
    updateGameSubmit
);
