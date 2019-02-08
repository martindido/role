import type {
    SetCurrentUnconfirmedUserAction,
    UnsetCurrentUnconfirmedUserAction,
    AuthenticateAction,
    SignOutAction
} from './Action/Auth';
import type { SearchAllAction } from './Action/GraphQL';
import type { LoadWorldAction, LoadGameAction } from './Action/Load';
import type { SetCurrentLanguageAction } from './Action/Locale';
import type { SetNotFoundAction, SetPreviousLocationAction } from './Action/Routing';
import type { SetSearchLoadingAction, UnsetSearchResultsAction } from './Action/Search';
import type {
    SignInSyncAction,
    SignUpSyncAction,
    SignUpConfirmSyncAction,
    AuthenticateSyncAction,
    CreateWorldSyncAction,
    UpdateWorldSyncAction,
    CreateGameSyncAction,
    UpdateGameSyncAction,
    GetCurrentLanguageSyncAction
} from './Action/Sync';
import type { Location } from 'react-router-dom';
import type { User } from './User';
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
export type SetCurrentLanguageActionCreator = string => SetCurrentLanguageAction;
export type GetCurrentLanguageSyncActionCreator = SyncMeta => GetCurrentLanguageSyncAction;
