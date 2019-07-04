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
} from '../constants/actions';
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
} from '../types/Action/Sync';
import { CreateGameFormData, UpdateGameFormData } from '../types/Form/Admin/Game';
import { CreateWorldFormData, UpdateWorldFormData } from '../types/Form/Admin/World';
import { SignInFormData } from '../types/Form/Auth/SignIn';
import { SignUpFormData } from '../types/Form/Auth/SignUp';
import { SignUpConfirmFormData } from '../types/Form/Auth/SignUpConfirm';
import { AuthenticateSync, SyncMeta } from '../types/Sync';

export function authenticateSync(payload: AuthenticateSync, meta: SyncMeta): AuthenticateSyncAction {
    return {
        type: AUTHENTICATE_SYNC,
        payload,
        meta
    };
}

export function signInSync(payload: SignInFormData, meta: SyncMeta): SignInSyncAction {
    return {
        type: SIGN_IN_SYNC,
        payload,
        meta
    };
}

export function signUpSync(payload: SignUpFormData, meta: SyncMeta): SignUpSyncAction {
    return {
        type: SIGN_UP_SYNC,
        payload,
        meta
    };
}

export function signUpConfirmSync(payload: SignUpConfirmFormData, meta: SyncMeta): SignUpConfirmSyncAction {
    return {
        type: SIGN_UP_CONFIRM_SYNC,
        payload,
        meta
    };
}

export function createWorldSync(payload: CreateWorldFormData, meta: SyncMeta): CreateWorldSyncAction {
    return {
        type: CREATE_WORLD_SYNC,
        payload,
        meta
    };
}

export function updateWorldSync(payload: UpdateWorldFormData, meta: SyncMeta): UpdateWorldSyncAction {
    return {
        type: UPDATE_WORLD_SYNC,
        payload,
        meta
    };
}

export function createGameSync(payload: CreateGameFormData, meta: SyncMeta): CreateGameSyncAction {
    return {
        type: CREATE_GAME_SYNC,
        payload,
        meta
    };
}

export function updateGameSync(payload: UpdateGameFormData, meta: SyncMeta): UpdateGameSyncAction {
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
