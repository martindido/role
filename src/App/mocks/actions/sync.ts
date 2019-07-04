import {
    AUTHENTICATE_SYNC,
    CREATE_GAME_SYNC,
    CREATE_WORLD_SYNC,
    GET_CURRENT_LANGUAGE_SYNC,
    SIGN_IN_SYNC,
    SIGN_UP_CONFIRM_SYNC,
    SIGN_UP_SYNC,
    UPDATE_GAME_SYNC,
    UPDATE_WORLD_SYNC
} from '../../constants/actions';
import {
    AuthenticateSyncAction,
    CreateGameSyncAction,
    CreateWorldSyncAction,
    GetCurrentLanguageSyncAction,
    SignInSyncAction,
    SignUpConfirmSyncAction,
    SignUpSyncAction,
    UpdateGameSyncAction,
    UpdateWorldSyncAction
} from '../../types/Action/Sync';
import {
    authenticateSync,
    authenticateWithAuthenticatorSync,
    createGameFormData,
    createWorldFormData,
    signInFormData,
    signUpConfirmFormData,
    signUpFormData,
    syncMeta,
    updateGameFormData,
    updateGameWithLogoFormData,
    updateWorldFormData,
    updateWorldWithLogoFormData
} from '../sync';

export const authenticateSyncAction: AuthenticateSyncAction = {
    type: AUTHENTICATE_SYNC,
    payload: authenticateSync,
    meta: syncMeta
};

export const authenticateWithAuthenticatorSyncAction: AuthenticateSyncAction = {
    type: AUTHENTICATE_SYNC,
    payload: authenticateWithAuthenticatorSync,
    meta: syncMeta
};

export const signInSyncAction: SignInSyncAction = {
    type: SIGN_IN_SYNC,
    payload: signInFormData,
    meta: syncMeta
};

export const signUpSyncAction: SignUpSyncAction = {
    type: SIGN_UP_SYNC,
    payload: signUpFormData,
    meta: syncMeta
};

export const signUpConfirmSyncAction: SignUpConfirmSyncAction = {
    type: SIGN_UP_CONFIRM_SYNC,
    payload: signUpConfirmFormData,
    meta: syncMeta
};

export const createWorldSyncAction: CreateWorldSyncAction = {
    type: CREATE_WORLD_SYNC,
    payload: createWorldFormData,
    meta: syncMeta
};

export const updateWorldSyncAction: UpdateWorldSyncAction = {
    type: UPDATE_WORLD_SYNC,
    payload: updateWorldFormData,
    meta: syncMeta
};

export const updateWorldWithLogoSyncAction: UpdateWorldSyncAction = {
    type: UPDATE_WORLD_SYNC,
    payload: updateWorldWithLogoFormData,
    meta: syncMeta
};

export const createGameSyncAction: CreateGameSyncAction = {
    type: CREATE_GAME_SYNC,
    payload: createGameFormData,
    meta: syncMeta
};

export const updateGameSyncAction: UpdateGameSyncAction = {
    type: UPDATE_GAME_SYNC,
    payload: updateGameFormData,
    meta: syncMeta
};

export const updateGameWithLogoSyncAction: UpdateGameSyncAction = {
    type: UPDATE_GAME_SYNC,
    payload: updateGameWithLogoFormData,
    meta: syncMeta
};

export const getCurrentLanguageSyncAction: GetCurrentLanguageSyncAction = {
    type: GET_CURRENT_LANGUAGE_SYNC,
    meta: syncMeta
};
