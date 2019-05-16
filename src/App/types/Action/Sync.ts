import {
    authenticateSync,
    createGameSync,
    createWorldSync,
    getCurrentLanguageSync,
    signInSync,
    signUpConfirmSync,
    signUpSync,
    updateGameSync,
    updateWorldSync
} from '../../actions/sync';
import { CreateGameFormData, UpdateGameFormData } from '../Form/Admin/Game';
import { CreateWorldFormData, UpdateWorldFormData } from '../Form/Admin/World';
import { AuthenticateSync, SignInSync, SignUpConfirmSync, SignUpSync, SyncMeta } from '../Sync';

export type AuthenticateSyncAction = {
    type: 'AUTHENTICATE_SYNC';
    payload: AuthenticateSync;
    meta: SyncMeta;
};

export type AuthenticateSyncActionCreator = typeof authenticateSync;

export type GetCurrentLanguageSyncAction = {
    type: 'GET_CURRENT_LANGUAGE_SYNC';
    meta: SyncMeta;
};

export type GetCurrentLanguageSyncActionCreator = typeof getCurrentLanguageSync;

export type SignInSyncAction = {
    type: 'SIGN_IN_SYNC';
    payload: SignInSync;
    meta: SyncMeta;
};

export type SignInSyncActionCreator = typeof signInSync;

export type SignUpSyncAction = {
    type: 'SIGN_UP_SYNC';
    payload: SignUpSync;
    meta: SyncMeta;
};

export type SignUpSyncActionCreator = typeof signUpSync;

export type SignUpConfirmSyncAction = {
    type: 'SIGN_UP_CONFIRM_SYNC';
    payload: SignUpConfirmSync;
    meta: SyncMeta;
};

export type SignUpConfirmSyncActionCreator = typeof signUpConfirmSync;

export type CreateWorldSyncAction = {
    type: 'CREATE_WORLD_SYNC';
    payload: CreateWorldFormData;
    meta: SyncMeta;
};

export type CreateWorldSyncActionCreator = typeof createWorldSync;

export type UpdateWorldSyncAction = {
    type: 'UPDATE_WORLD_SYNC';
    payload: UpdateWorldFormData;
    meta: SyncMeta;
};

export type UpdateWorldSyncActionCreator = typeof updateWorldSync;

export type CreateGameSyncAction = {
    type: 'CREATE_GAME_SYNC';
    payload: CreateGameFormData;
    meta: SyncMeta;
};

export type CreateGameSyncActionCreator = typeof createGameSync;

export type UpdateGameSyncAction = {
    type: 'UPDATE_GAME_SYNC';
    payload: UpdateGameFormData;
    meta: SyncMeta;
};

export type UpdateGameSyncActionCreator = typeof updateGameSync;

export type SyncAction =
    | AuthenticateSyncAction
    | GetCurrentLanguageSyncAction
    | SignInSyncAction
    | SignUpSyncAction
    | SignUpConfirmSyncAction
    | CreateWorldSyncAction
    | UpdateWorldSyncAction
    | CreateGameSyncAction
    | UpdateGameSyncAction;
