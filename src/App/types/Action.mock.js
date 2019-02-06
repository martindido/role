import {
    SIGN_IN,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_CONFIRM,
    SET_CURRENT_UNCONFIRMED_USER,
    UNSET_CURRENT_UNCONFIRMED_USER,
    SIGN_OUT,
    AUTHENTICATE,
    SET_CURRENT_USER,
    UNSET_CURRENT_USER,
    SEARCH_ALL,
    LIST_WORLDS,
    LIST_WORLDS_SUCCESS,
    LIST_WORLDS_ERROR,
    SET_WORLDS,
    CREATE_WORLD,
    CREATE_WORLD_SUCCESS,
    CREATE_WORLD_ERROR,
    UPDATE_WORLD,
    UPDATE_WORLD_SUCCESS,
    UPDATE_WORLD_ERROR,
    GET_WORLD,
    GET_WORLD_SUCCESS,
    GET_WORLD_ERROR,
    SET_WORLD,
    UNSET_WORLD,
    LOAD_WORLDS,
    LOAD_WORLD,
    LOAD_GAME,
    CREATE_GAME,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_ERROR,
    UPDATE_GAME,
    UPDATE_GAME_SUCCESS,
    UPDATE_GAME_ERROR,
    GET_GAME,
    GET_GAME_SUCCESS,
    GET_GAME_ERROR,
    SET_GAME,
    UNSET_GAME,
    SET_LOADING,
    SET_NOT_FOUND,
    SET_PREVIOUS_LOCATION,
    SET_SEARCH_LOADING,
    SET_SEARCH_RESULTS,
    UNSET_SEARCH_RESULTS,
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR,
    CREATE_WORLD_SYNC,
    UPDATE_WORLD_SYNC,
    CREATE_GAME_SYNC,
    UPDATE_GAME_SYNC
} from '../constants/actions';
import { credentials, credentialsWithEmail, confirmation } from './Auth.mock';
import { user } from './User.mock';
import { world } from './World.mock';
import { game } from './Game.mock';
import {
    createWorldInput,
    createWorldWithIdInput,
    updateWorldInput,
    updateWorldWithNameInput,
    updateWorldWithSlugInput,
    updateWorldWithLogoInput,
    updateWorldWithoutNameInput,
    updateWorldWithoutSlugInput,
    updateWorldWithoutLogoInput,
    getWorldQueryVariables,
    createGameInput,
    createGameWithIdInput,
    updateGameInput,
    updateGameWithNameInput,
    updateGameWithSlugInput,
    updateGameWithLogoInput,
    updateGameWithWorldInput,
    updateGameWithNameAndSlugInput,
    updateGameWithNameAndLogoInput,
    updateGameWithNameAndWorldInput,
    updateGameWithSlugAndLogoInput,
    updateGameWithSlugAndWorldInput,
    updateGameWithLogoAndWorldInput,
    updateGameWithoutNameInput,
    updateGameWithoutSlugInput,
    updateGameWithoutLogoInput,
    updateGameWithoutWorldInput,
    getGameQueryVariables
} from './GraphQL.mock';
import { location } from './Router.mock';
import { searchResults, searchResultsWithCategories, VALUE } from './Search.mock';
import {
    errors,
    errorStrings,
    syncMeta,
    createWorldSync,
    updateWorldSync,
    updateWorldWithLogoSync,
    createGameSync,
    updateGameSync,
    updateGameWithLogoSync
} from './Sync.mock';
import { fileUpload, s3File } from './Storage.mock';

export const signInAction = {
    type: SIGN_IN,
    payload: credentials
};

export const signUpAction = {
    type: SIGN_UP,
    payload: credentialsWithEmail
};

export const signUpSuccessAction = {
    type: SIGN_UP_SUCCESS,
    payload: user
};

export const signUpConfirmAction = {
    type: SIGN_UP_CONFIRM,
    payload: confirmation
};

export const setCurrentUnconfirmedUserAction = {
    type: SET_CURRENT_UNCONFIRMED_USER,
    payload: user
};

export const unsetCurrentUnconfirmedUserAction = {
    type: UNSET_CURRENT_UNCONFIRMED_USER
};

export const signOutAction = {
    type: SIGN_OUT
};

export const authenticateAction = {
    type: AUTHENTICATE
};

export const setCurrentUserAction = {
    type: SET_CURRENT_USER,
    payload: user
};

export const unsetCurrentUserAction = {
    type: UNSET_CURRENT_USER
};

export const searchAllAction = {
    type: SEARCH_ALL,
    payload: VALUE
};

export const listWorldsAction = {
    type: LIST_WORLDS
};

export const listWorldsSuccessAction = {
    type: LIST_WORLDS_SUCCESS,
    payload: [world]
};

export const listWorldsErrorAction = {
    type: LIST_WORLDS_ERROR,
    payload: errors
};

export const listWorldsErrorStringAction = {
    type: LIST_WORLDS_ERROR,
    payload: errorStrings
};

export const setWorldsAction = {
    type: SET_WORLDS,
    payload: [world]
};

export const createWorldAction = {
    type: CREATE_WORLD,
    payload: createWorldInput
};

export const createWorldWithIdAction = {
    type: CREATE_WORLD,
    payload: createWorldWithIdInput
};

export const createWorldSuccessAction = {
    type: CREATE_WORLD_SUCCESS,
    payload: world
};

export const createWorldErrorAction = {
    type: CREATE_WORLD_ERROR,
    payload: errors
};

export const createWorldErrorStringAction = {
    type: CREATE_WORLD_ERROR,
    payload: errorStrings
};

export const updateWorldAction = {
    type: UPDATE_WORLD,
    payload: updateWorldInput
};

export const updateWorldWithNameAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithNameInput
};

export const updateWorldWithSlugAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithSlugInput
};

export const updateWorldWithLogoAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithLogoInput
};

export const updateWorldWithoutNameAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithoutNameInput
};

export const updateWorldWithoutSlugAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithoutSlugInput
};

export const updateWorldWithoutLogoAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithoutLogoInput
};

export const updateWorldSuccessAction = {
    type: UPDATE_WORLD_SUCCESS,
    payload: world
};

export const updateWorldErrorAction = {
    type: UPDATE_WORLD_ERROR,
    payload: errors
};

export const updateWorldErrorStringAction = {
    type: UPDATE_WORLD_ERROR,
    payload: errorStrings
};

export const getWorldAction = {
    type: GET_WORLD,
    payload: getWorldQueryVariables
};

export const getWorldSuccessAction = {
    type: GET_WORLD_SUCCESS,
    payload: world
};

export const getWorldErrorAction = {
    type: GET_WORLD_ERROR,
    payload: errors
};

export const getWorldErrorStringAction = {
    type: GET_WORLD_ERROR,
    payload: errorStrings
};

export const setWorldAction = {
    type: SET_WORLD,
    payload: world
};

export const unsetWorldAction = {
    type: UNSET_WORLD
};

export const createGameAction = {
    type: CREATE_GAME,
    payload: createGameInput
};

export const createGameWithIdAction = {
    type: CREATE_GAME,
    payload: createGameWithIdInput
};

export const createGameSuccessAction = {
    type: CREATE_GAME_SUCCESS,
    payload: game
};

export const createGameErrorAction = {
    type: CREATE_GAME_ERROR,
    payload: errors
};

export const createGameErrorStringAction = {
    type: CREATE_GAME_ERROR,
    payload: errorStrings
};

export const updateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameInput
};

export const updateGameWithNameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithNameInput
};

export const updateGameWithSlugAction = {
    type: UPDATE_GAME,
    payload: updateGameWithSlugInput
};

export const updateGameWithLogoAction = {
    type: UPDATE_GAME,
    payload: updateGameWithLogoInput
};

export const updateGameWithWorldAction = {
    type: UPDATE_GAME,
    payload: updateGameWithWorldInput
};

export const updateGameWithNameAndSlugAction = {
    type: UPDATE_GAME,
    payload: updateGameWithNameAndSlugInput
};

export const updateGameWithNameAndLogoAction = {
    type: UPDATE_GAME,
    payload: updateGameWithNameAndLogoInput
};

export const updateGameWithNameAndWorldAction = {
    type: UPDATE_GAME,
    payload: updateGameWithNameAndWorldInput
};

export const updateGameWithSlugAndLogoAction = {
    type: UPDATE_GAME,
    payload: updateGameWithSlugAndLogoInput
};

export const updateGameWithSlugAndWorldAction = {
    type: UPDATE_GAME,
    payload: updateGameWithSlugAndWorldInput
};

export const updateGameWithLogoAndWorldAction = {
    type: UPDATE_GAME,
    payload: updateGameWithLogoAndWorldInput
};

export const updateGameWithoutNameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithoutNameInput
};

export const updateGameWithoutSlugAction = {
    type: UPDATE_GAME,
    payload: updateGameWithoutSlugInput
};

export const updateGameWithoutLogoAction = {
    type: UPDATE_GAME,
    payload: updateGameWithoutLogoInput
};

export const updateGameWithoutWorldAction = {
    type: UPDATE_GAME,
    payload: updateGameWithoutWorldInput
};

export const updateGameSuccessAction = {
    type: UPDATE_GAME_SUCCESS,
    payload: game
};

export const updateGameErrorAction = {
    type: UPDATE_GAME_ERROR,
    payload: errors
};

export const updateGameErrorStringAction = {
    type: UPDATE_GAME_ERROR,
    payload: errorStrings
};

export const getGameAction = {
    type: GET_GAME,
    payload: getGameQueryVariables
};

export const getGameSuccessAction = {
    type: GET_GAME_SUCCESS,
    payload: game
};

export const getGameErrorAction = {
    type: GET_GAME_ERROR,
    payload: errors
};

export const getGameErrorStringAction = {
    type: GET_GAME_ERROR,
    payload: errorStrings
};

export const setGameAction = {
    type: SET_GAME,
    payload: game
};

export const unsetGameAction = {
    type: UNSET_GAME
};

export const loadWorldsAction = {
    type: LOAD_WORLDS
};

export const loadWorldAction = {
    type: LOAD_WORLD,
    payload: world.id
};

export const loadGameAction = {
    type: LOAD_GAME,
    payload: game.id
};

export const setLoadingAction = {
    type: SET_LOADING,
    payload: true
};

export const unsetLoadingAction = {
    type: SET_LOADING,
    payload: false
};

export const setNotFoundAction = {
    type: SET_NOT_FOUND,
    payload: true
};

export const unsetNotFoundAction = {
    type: SET_NOT_FOUND,
    payload: false
};

export const setPreviousLocationAction = {
    type: SET_PREVIOUS_LOCATION,
    payload: location
};

export const setSearchLoadingAction = {
    type: SET_SEARCH_LOADING,
    payload: true
};

export const unsetSearchLoadingAction = {
    type: SET_SEARCH_LOADING,
    payload: false
};

export const setSearchResultsAction = {
    type: SET_SEARCH_RESULTS,
    payload: searchResults
};

export const setSearchResultsWithCategoriesAction = {
    type: SET_SEARCH_RESULTS,
    payload: searchResultsWithCategories
};

export const unsetSearchResultsAction = {
    type: UNSET_SEARCH_RESULTS
};

export const uploadFileAction = {
    type: UPLOAD_FILE,
    payload: fileUpload
};

export const uploadFileSuccessAction = {
    type: UPLOAD_FILE_SUCCESS,
    payload: s3File
};

export const uploadFileErrorAction = {
    type: UPLOAD_FILE_ERROR,
    payload: errors
};

export const uploadFileErrorStringAction = {
    type: UPLOAD_FILE_ERROR,
    payload: errorStrings
};

export const createWorldSyncAction = {
    type: CREATE_WORLD_SYNC,
    payload: createWorldSync,
    meta: syncMeta
};

export const updateWorldSyncAction = {
    type: UPDATE_WORLD_SYNC,
    payload: updateWorldSync,
    meta: syncMeta
};

export const updateWorldWithLogoSyncAction = {
    type: UPDATE_WORLD_SYNC,
    payload: updateWorldWithLogoSync,
    meta: syncMeta
};

export const createGameSyncAction = {
    type: CREATE_GAME_SYNC,
    payload: createGameSync,
    meta: syncMeta
};

export const updateGameSyncAction = {
    type: UPDATE_GAME_SYNC,
    payload: updateGameSync,
    meta: syncMeta
};

export const updateGameWithLogoSyncAction = {
    type: UPDATE_GAME_SYNC,
    payload: updateGameWithLogoSync,
    meta: syncMeta
};
