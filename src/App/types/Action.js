import type { Location } from 'react-router-dom';
import type { User, UnconfirmedUser } from './User';
import type { SignUpConfirm, Credentials } from './Auth';
import type { Profile } from './Profile';
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
    Errors,
    SubmitMeta,
    CreateWorldSubmit,
    UpdateWorldSubmit,
    CreateGameSubmit,
    UpdateGameSubmit
} from './Submit';
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

export type CreateWorldSubmitAction = {
    type: 'CREATE_WORLD_SUBMIT',
    payload: CreateWorldSubmit,
    meta: SubmitMeta
};

export type UpdateWorldSubmitAction = {
    type: 'UPDATE_WORLD_SUBMIT',
    payload: UpdateWorldSubmit,
    meta: SubmitMeta
};

export type CreateGameSubmitAction = {
    type: 'CREATE_GAME_SUBMIT',
    payload: CreateGameSubmit,
    meta: SubmitMeta
};

export type UpdateGameSubmitAction = {
    type: 'UPDATE_GAME_SUBMIT',
    payload: UpdateGameSubmit,
    meta: SubmitMeta
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

export type SignInAction = {
    type: 'SIGN_IN',
    payload: Credentials
};

export type SignUpAction = {
    type: 'SIGN_UP',
    payload: Credentials
};

export type SignUpSuccessAction = {
    type: 'SIGN_UP_SUCCESS',
    payload: UnconfirmedUser
};

export type SignUpConfirmAction = {
    type: 'SIGN_UP_CONFIRM',
    payload: SignUpConfirm
};

export type SignOutAction = {
    type: 'SIGN_OUT'
};

export type AuthenticateAction = {
    type: 'AUTHENTICATE',
    payload: boolean
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

export type EstablishCurrentUserAction = {
    type: 'ESTABLISH_CURRENT_USER'
};

export type GetCurrentProfileAction = {
    type: 'GET_CURRENT_PROFILE',
    payload: number
};

export type SetCurrentProfileAction = {
    type: 'SET_CURRENT_PROFILE',
    payload: Profile
};

export type UnsetCurrentProfileAction = {
    type: 'UNSET_CURRENT_PROFILE'
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

export type RoutingAction = SetLoadingAction | SetNotFoundAction | SetPreviousLocationAction;

export type SubmitAction =
    | CreateWorldSubmitAction
    | UpdateWorldSubmitAction
    | CreateGameSubmitAction
    | UpdateGameSubmitAction;

export type AuthAction =
    | SignInAction
    | SignUpAction
    | SignUpSuccessAction
    | SignUpConfirmAction
    | UnsetCurrentUnconfirmedUserAction
    | SignOutAction
    | AuthenticateAction
    | SetCurrentUserAction
    | UnsetCurrentUserAction
    | EstablishCurrentUserAction;

export type ProfileAction = GetCurrentProfileAction | SetCurrentProfileAction | UnsetCurrentProfileAction;

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

export type Action = RoutingAction | SubmitAction | AuthAction | ProfileAction | GraphQLAction | SearchAction;
