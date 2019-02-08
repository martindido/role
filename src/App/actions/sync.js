import {
    AUTHENTICATE_SYNC,
    SIGN_IN_SYNC,
    SIGN_UP_SYNC,
    SIGN_UP_CONFIRM_SYNC,
    CREATE_WORLD_SYNC,
    UPDATE_WORLD_SYNC,
    CREATE_GAME_SYNC,
    UPDATE_GAME_SYNC,
    GET_CURRENT_LANGUAGE_SYNC
} from '../constants/actions';

import type {
    AuthenticateSyncAction,
    SignInSyncAction,
    SignUpSyncAction,
    SignUpConfirmSyncAction,
    UpdateWorldSyncAction,
    CreateWorldSyncAction,
    UpdateGameSyncAction,
    CreateGameSyncAction,
    GetCurrentLanguageSyncAction
} from '../types/Action/Sync';
import type {
    SyncMeta,
    AuthenticateSync,
    SignInSync,
    SignUpSync,
    SignUpConfirmSync,
    CreateWorldSync,
    UpdateWorldSync,
    CreateGameSync,
    UpdateGameSync
} from '../types/Sync';

export function authenticateSync(payload: AuthenticateSync, meta: SyncMeta): AuthenticateSyncAction {
    return {
        type: AUTHENTICATE_SYNC,
        payload,
        meta
    };
}

export function signInSync(payload: SignInSync, meta: SyncMeta): SignInSyncAction {
    return {
        type: SIGN_IN_SYNC,
        payload,
        meta
    };
}

export function signUpSync(payload: SignUpSync, meta: SyncMeta): SignUpSyncAction {
    return {
        type: SIGN_UP_SYNC,
        payload,
        meta
    };
}

export function signUpConfirmSync(payload: SignUpConfirmSync, meta: SyncMeta): SignUpConfirmSyncAction {
    return {
        type: SIGN_UP_CONFIRM_SYNC,
        payload,
        meta
    };
}

export function createWorldSync(payload: CreateWorldSync, meta: SyncMeta): CreateWorldSyncAction {
    return {
        type: CREATE_WORLD_SYNC,
        payload,
        meta
    };
}

export function updateWorldSync(payload: UpdateWorldSync, meta: SyncMeta): UpdateWorldSyncAction {
    return {
        type: UPDATE_WORLD_SYNC,
        payload,
        meta
    };
}

export function createGameSync(payload: CreateGameSync, meta: SyncMeta): CreateGameSyncAction {
    return {
        type: CREATE_GAME_SYNC,
        payload,
        meta
    };
}

export function updateGameSync(payload: UpdateGameSync, meta: SyncMeta): UpdateGameSyncAction {
    return {
        type: UPDATE_GAME_SYNC,
        payload,
        meta
    };
}

export function getCurrentLanguageSync(meta: SyncMeta): GetCurrentLanguageSyncAction {
    return {
        type: GET_CURRENT_LANGUAGE_SYNC,
        meta
    };
}
