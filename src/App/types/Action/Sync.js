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
} from '../Sync';

export type AuthenticateSyncAction = {
    type: 'AUTHENTICATE_SYNC',
    payload: AuthenticateSync,
    meta: SyncMeta
};

export type GetCurrentLanguageSyncAction = {
    type: 'GET_CURRENT_LANGUAGE_SYNC',
    meta: SyncMeta
};

export type SignInSyncAction = {
    type: 'SIGN_IN_SYNC',
    payload: SignInSync,
    meta: SyncMeta
};

export type SignUpSyncAction = {
    type: 'SIGN_UP_SYNC',
    payload: SignUpSync,
    meta: SyncMeta
};

export type SignUpConfirmSyncAction = {
    type: 'SIGN_UP_CONFIRM_SYNC',
    payload: SignUpConfirmSync,
    meta: SyncMeta
};

export type CreateWorldSyncAction = {
    type: 'CREATE_WORLD_SYNC',
    payload: CreateWorldSync,
    meta: SyncMeta
};

export type UpdateWorldSyncAction = {
    type: 'UPDATE_WORLD_SYNC',
    payload: UpdateWorldSync,
    meta: SyncMeta
};

export type CreateGameSyncAction = {
    type: 'CREATE_GAME_SYNC',
    payload: CreateGameSync,
    meta: SyncMeta
};

export type UpdateGameSyncAction = {
    type: 'UPDATE_GAME_SYNC',
    payload: UpdateGameSync,
    meta: SyncMeta
};

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
