import type { Location } from 'react-router-dom';
import type {
    SyncMeta,
    AuthenticateSync,
    SignInSync,
    SignUpSync,
    SignUpConfirmSync,
    CreateWorldSync,
    CreateGameSync,
    UpdateWorldSync,
    UpdateGameSync
} from './Sync';
import type {
    UnsetSearchResultsAction,
    SetSearchLoadingAction,
    SearchAllAction,
    SetCurrentUnconfirmedUserAction,
    UnsetCurrentUnconfirmedUserAction,
    AuthenticateAction,
    SignInSyncAction,
    SignUpSyncAction,
    SignUpConfirmSyncAction,
    SignOutAction,
    AuthenticateSyncAction,
    CreateWorldSyncAction,
    UpdateWorldSyncAction,
    CreateGameSyncAction,
    UpdateGameSyncAction,
    SetPreviousLocationAction,
    SetNotFoundAction,
    LoadWorldAction,
    LoadGameAction
} from './Action';
import type { User } from './User';

export type SetNotFoundActionCreator = boolean => SetNotFoundAction;
export type SetPreviousLocationActionCreator = Location => SetPreviousLocationAction;
export type LoadWorldActionCreator = string => LoadWorldAction;
export type LoadGameActionCreator = string => LoadGameAction;
export type CreateWorldSyncActionCreator = (CreateWorldSync, SyncMeta) => CreateWorldSyncAction;
export type UpdateWorldSyncActionCreator = (UpdateWorldSync, SyncMeta) => UpdateWorldSyncAction;
export type CreateGameSyncActionCreator = (CreateGameSync, SyncMeta) => CreateGameSyncAction;
export type UpdateGameSyncActionCreator = (UpdateGameSync, SyncMeta) => UpdateGameSyncAction;
export type SignInSyncActionCreator = (SignInSync, SyncMeta) => SignInSyncAction;
export type SignUpSyncActionCreator = (SignUpSync, SyncMeta) => SignUpSyncAction;
export type SignUpConfirmSyncActionCreator = (SignUpConfirmSync, SyncMeta) => SignUpConfirmSyncAction;
export type SignOutActionCreator = () => SignOutAction;
export type AuthenticateSyncActionCreator = (AuthenticateSync, SyncMeta) => AuthenticateSyncAction;
export type AuthenticateActionCreator = () => AuthenticateAction;
export type SetCurrentUnconfirmedUserActionCreator = User => SetCurrentUnconfirmedUserAction;
export type UnsetCurrentUnconfirmedUserActionCreator = () => UnsetCurrentUnconfirmedUserAction;
export type SearchAllActionCreator = string => SearchAllAction;
export type SetSearchLoadingActionCreator = boolean => SetSearchLoadingAction;
export type UnsetSearchResultsActionCreator = () => UnsetSearchResultsAction;
