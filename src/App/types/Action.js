import type { Location } from 'react-router-dom';
import type { User } from './User';
import type { Credentials, Confirmation, Authenticator } from './Auth';
import type {
    CreateWorldInput,
    UpdateWorldInput,
    GetWorldQueryVariables,
    UpdateGameInput,
    CreateGameInput,
    GetGameQueryVariables
} from './GraphQL';
import type { World } from './World';
import type { SearchResults } from './Search';
import type {
    AmplifyError,
    Errors,
    SyncMeta,
    AuthenticateSync,
    SignInSync,
    SignUpSync,
    SignUpConfirmSync,
    CreateWorldSync,
    UpdateWorldSync,
    CreateGameSync,
    UpdateGameSync
} from './Sync';
import type { FileUpload, S3File } from './Storage';
import type { Game } from './Game';

export type SetLoadingAction = {
    type: 'SET_LOADING',
    payload: boolean
};

export type SetNotFoundAction = {
    type: 'SET_NOT_FOUND',
    payload: boolean
};

export type SetPreviousLocationAction = {
    type: 'SET_PREVIOUS_LOCATION',
    payload: Location
};

export type LoadWorldsAction = {
    type: 'LOAD_WORLDS'
};

export type LoadWorldAction = {
    type: 'LOAD_WORLD',
    payload: string
};

export type LoadGameAction = {
    type: 'LOAD_GAME',
    payload: string
};

export type AuthenticateSyncAction = {
    type: 'AUTHENTICATE_SYNC',
    payload: AuthenticateSync,
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

export type GetCurrentLanguageSyncAction = {
    type: 'GET_CURRENT_LANGUAGE_SYNC',
    meta: SyncMeta
};

export type UploadFileAction = {
    type: 'UPLOAD_FILE',
    payload: FileUpload
};

export type UploadFileSuccessAction = {
    type: 'UPLOAD_FILE_SUCCESS',
    payload: S3File
};

export type UploadFileErrorAction = {
    type: 'UPLOAD_FILE_ERROR',
    payload: Errors
};

export type AuthenticateAction = {
    type: 'AUTHENTICATE',
    payload?: Authenticator
};

export type AuthenticateSuccessAction = {
    type: 'AUTHENTICATE_SUCCESS',
    payload: User
};

export type AuthenticateErrorAction = {
    type: 'AUTHENTICATE_ERROR',
    payload: AmplifyError
};

export type SignInAction = {
    type: 'SIGN_IN',
    payload: Credentials
};

export type SignInSuccessAction = {
    type: 'SIGN_IN_SUCCESS',
    payload: User
};

export type SignInErrorAction = {
    type: 'SIGN_IN_ERROR',
    payload: AmplifyError
};

export type SignUpAction = {
    type: 'SIGN_UP',
    payload: Credentials
};

export type SignUpSuccessAction = {
    type: 'SIGN_UP_SUCCESS',
    payload: User
};

export type SignUpErrorAction = {
    type: 'SIGN_UP_ERROR',
    payload: AmplifyError
};

export type SignUpConfirmAction = {
    type: 'SIGN_UP_CONFIRM',
    payload: Confirmation
};

export type SignUpConfirmSuccessAction = {
    type: 'SIGN_UP_CONFIRM_SUCCESS',
    payload: string
};

export type SignUpConfirmErrorAction = {
    type: 'SIGN_UP_CONFIRM_ERROR',
    payload: AmplifyError
};

export type SignOutAction = {
    type: 'SIGN_OUT'
};

export type SetCurrentUnconfirmedUserAction = {
    type: 'SET_CURRENT_UNCONFIRMED_USER',
    payload: User
};

export type UnsetCurrentUnconfirmedUserAction = {
    type: 'UNSET_CURRENT_UNCONFIRMED_USER'
};

export type SetCurrentUserAction = {
    type: 'SET_CURRENT_USER',
    payload: User
};

export type UnsetCurrentUserAction = {
    type: 'UNSET_CURRENT_USER'
};

export type SearchAllAction = {
    type: 'SEARCH_ALL',
    payload: string
};

export type SetSearchLoadingAction = {
    type: 'SET_SEARCH_LOADING',
    payload: boolean
};

export type SetSearchResultsAction = {
    type: 'SET_SEARCH_RESULTS',
    payload: SearchResults
};

export type UnsetSearchResultsAction = {
    type: 'UNSET_SEARCH_RESULTS'
};

export type ListWorldsAction = {
    type: 'LIST_WORLDS'
};

export type ListWorldsSuccessAction = {
    type: 'LIST_WORLDS_SUCCESS',
    payload: Array<World>
};

export type ListWorldsErrorAction = {
    type: 'LIST_WORLDS_ERROR',
    payload: Errors
};

export type SetWorldsAction = {
    type: 'SET_WORLDS',
    payload: Array<World>
};

export type CreateWorldAction = {
    type: 'CREATE_WORLD',
    payload: CreateWorldInput
};

export type CreateWorldSuccessAction = {
    type: 'CREATE_WORLD_SUCCESS',
    payload: World
};

export type CreateWorldErrorAction = {
    type: 'CREATE_WORLD_ERROR',
    payload: Errors
};

export type UpdateWorldAction = {
    type: 'UPDATE_WORLD',
    payload: UpdateWorldInput
};

export type UpdateWorldSuccessAction = {
    type: 'UPDATE_WORLD_SUCCESS',
    payload: World
};

export type UpdateWorldErrorAction = {
    type: 'UPDATE_WORLD_ERROR',
    payload: Errors
};

export type GetWorldAction = {
    type: 'GET_WORLD',
    payload: GetWorldQueryVariables
};

export type GetWorldSuccessAction = {
    type: 'GET_WORLD_SUCCESS',
    payload: World
};

export type GetWorldErrorAction = {
    type: 'GET_WORLD_ERROR',
    payload: Errors
};

export type SetWorldAction = {
    type: 'SET_WORLD',
    payload: World
};

export type UnsetWorldAction = {
    type: 'UNSET_WORLD'
};

export type CreateGameAction = {
    type: 'CREATE_GAME',
    payload: CreateGameInput
};

export type CreateGameSuccessAction = {
    type: 'CREATE_GAME_SUCCESS',
    payload: Game
};

export type CreateGameErrorAction = {
    type: 'CREATE_GAME_ERROR',
    payload: Errors
};

export type UpdateGameAction = {
    type: 'UPDATE_GAME',
    payload: UpdateGameInput
};

export type UpdateGameSuccessAction = {
    type: 'UPDATE_GAME_SUCCESS',
    payload: Game
};

export type UpdateGameErrorAction = {
    type: 'UPDATE_GAME_ERROR',
    payload: Errors
};

export type GetGameAction = {
    type: 'GET_GAME',
    payload: GetGameQueryVariables
};

export type GetGameSuccessAction = {
    type: 'GET_GAME_SUCCESS',
    payload: Game
};

export type GetGameErrorAction = {
    type: 'GET_GAME_ERROR',
    payload: Errors
};

export type SetGameAction = {
    type: 'SET_GAME',
    payload: Game
};

export type UnsetGameAction = {
    type: 'UNSET_GAME'
};

export type SetCurrentLanguageAction = {
    type: 'SET_CURRENT_LANGUAGE',
    payload: string
};

export type SetCurrentLanguageSuccessAction = {
    type: 'SET_CURRENT_LANGUAGE_SUCCESS'
};

export type SetCurrentLanguageErrorAction = {
    type: 'SET_CURRENT_LANGUAGE_ERROR',
    payload: AmplifyError
};

export type GetCurrentLanguageAction = {
    type: 'GET_CURRENT_LANGUAGE'
};

export type GetCurrentLanguageSuccessAction = {
    type: 'GET_CURRENT_LANGUAGE_SUCCESS',
    payload: string
};

export type GetCurrentLanguageErrorAction = {
    type: 'GET_CURRENT_LANGUAGE_ERROR',
    payload: AmplifyError
};

export type RoutingAction = SetLoadingAction | SetNotFoundAction | SetPreviousLocationAction;

export type SyncAction =
    | AuthenticateSyncAction
    | SignInSyncAction
    | SignUpSyncAction
    | SignUpConfirmSyncAction
    | CreateWorldSyncAction
    | UpdateWorldSyncAction
    | CreateGameSyncAction
    | UpdateGameSyncAction
    | GetCurrentLanguageSyncAction;

export type AuthAction =
    | SignInAction
    | SignInSuccessAction
    | SignInErrorAction
    | SignUpAction
    | SignUpSuccessAction
    | SignUpErrorAction
    | SignUpConfirmAction
    | SignUpConfirmSuccessAction
    | SignUpConfirmErrorAction
    | SetCurrentUnconfirmedUserAction
    | UnsetCurrentUnconfirmedUserAction
    | SignOutAction
    | AuthenticateAction
    | SetCurrentUserAction
    | UnsetCurrentUserAction;

export type GraphQLAction =
    | SearchAllAction
    | ListWorldsAction
    | ListWorldsSuccessAction
    | ListWorldsErrorAction
    | SetWorldsAction
    | CreateWorldAction
    | UpdateWorldAction
    | UpdateWorldSuccessAction
    | UpdateWorldErrorAction
    | GetWorldAction
    | GetWorldSuccessAction
    | GetWorldErrorAction
    | SetWorldAction
    | UnsetWorldAction
    | CreateGameAction
    | UpdateGameAction
    | UpdateGameSuccessAction
    | UpdateGameErrorAction
    | GetGameAction
    | SetGameAction
    | UnsetGameAction;

export type SearchAction = SetSearchLoadingAction | SetSearchResultsAction | UnsetSearchResultsAction;

export type LocaleAction =
    | SetCurrentLanguageAction
    | SetCurrentLanguageSuccessAction
    | SetCurrentLanguageErrorAction
    | GetCurrentLanguageAction
    | GetCurrentLanguageSuccessAction
    | GetCurrentLanguageErrorAction;

export type Action = RoutingAction | SyncAction | AuthAction | GraphQLAction | SearchAction | LocaleAction;
