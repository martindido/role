import type { User, UnconfirmedUser } from './User';
import type { SignUpConfirm, Credentials } from './Auth';
import type { Profile } from './Profile';
import type { CreateWorldInput, GetWorldQueryVariables } from './GraphQL';
import type { World } from './World';
import type { SearchResults } from './Search';

export type SetLoadingAction = {
    type: 'SET_LOADING',
    payload: boolean
};

export type SetNotFoundAction = {
    type: 'SET_NOT_FOUND',
    payload: boolean
};

export type SetSubmitSuccessAction = {
    type: 'SET_SUBMIT_SUCCESS',
    payload: {}
};

export type SetSubmitErrorAction = {
    type: 'SET_SUBMIT_ERRORS',
    payload: Array<{} | string>
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
    type: 'LOGOUT'
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

export type GetWorldsAction = {
    type: 'GET_WORLDS'
};

export type SetWorldsAction = {
    type: 'SET_WORLDS',
    payload: Array<World>
};

export type CreateWorldAction = {
    type: 'CREATE_WORLD',
    payload: CreateWorldInput
};

export type GetWorldAction = {
    type: 'GET_WORLD',
    payload: GetWorldQueryVariables
};

export type SetWorldAction = {
    type: 'SET_WORLD',
    payload: World
};

export type UnsetWorldAction = {
    type: 'UNSET_WORLD'
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

export type RoutingAction =
    | SetLoadingAction
    | SetNotFoundAction;

export type SubmitAction =
    | SetSubmitSuccessAction
    | SetSubmitErrorAction;

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

export type ProfileAction =
    | GetCurrentProfileAction
    | SetCurrentProfileAction
    | UnsetCurrentProfileAction;

export type GraphQLAction =
    | GetWorldsAction
    | SetWorldsAction
    | CreateWorldAction
    | GetWorldAction
    | SetWorldAction
    | UnsetWorldAction
    | SearchAllAction;

export type SearchAction =
    | SetSearchLoadingAction
    | SetSearchResultsAction
    | UnsetSearchResultsAction;

export type Action =
    | RoutingAction
    | SubmitAction
    | AuthAction
    | ProfileAction
    | GraphQLAction
    | SearchAction;
