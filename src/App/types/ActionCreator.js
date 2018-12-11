import type { Location } from 'react-router-dom';
import type { User, UnconfirmedUser } from './User';
import type { SignUpConfirm, Credentials } from './Auth';
import type { Profile } from './Profile';
import type { CreateWorldInput, UpdateWorldInput, GetWorldQueryVariables } from './GraphQL';
import type { World } from './World';
import type { SearchResults } from './Search';
import type { Errors, SubmitMeta } from './Submit';
import type {
    UnsetSearchResultsAction,
    SetSearchResultsAction,
    SetSearchLoadingAction,
    SearchAllAction,
    UnsetWorldAction,
    SetWorldAction,
    GetWorldAction,
    UpdateWorldErrorAction,
    UpdateWorldSuccessAction,
    UpdateWorldAction,
    CreateWorldAction,
    SetWorldsAction,
    GetWorldsAction,
    UnsetCurrentProfileAction,
    SetCurrentProfileAction,
    GetCurrentProfileAction,
    EstablishCurrentUserAction,
    UnsetCurrentUserAction,
    SetCurrentUserAction,
    UnsetCurrentUnconfirmedUserAction,
    AuthenticateAction,
    SignOutAction,
    SignUpConfirmAction,
    SignUpSuccessAction,
    SignUpAction,
    SignInAction,
    CreateWorldSubmitAction,
    UpdateWorldSubmitAction,
    UnsetSubmitAction,
    SetSubmitErrorAction,
    SetSubmitSuccessAction,
    SetPreviousLocationAction,
    SetNotFoundAction,
    SetLoadingAction
} from './Action';

export type SetLoadingActionCreator = boolean => SetLoadingAction;
export type SetNotFoundActionCreator = boolean => SetNotFoundAction;
export type SetPreviousLocationActionCreator = Location => SetPreviousLocationAction;
export type SetSubmitSuccessActionCreator = Object => SetSubmitSuccessAction;
export type SetSubmitErrorActionCreator = Errors => SetSubmitErrorAction;
export type UnsetSubmitActionCreator = () => UnsetSubmitAction;
export type CreateWorldSubmitActionCreator = (CreateWorldInput, SubmitMeta) => CreateWorldSubmitAction;
export type UpdateWorldSubmitActionCreator = (UpdateWorldInput, SubmitMeta) => UpdateWorldSubmitAction;
export type SignInActionCreator = Credentials => SignInAction;
export type SignUpActionCreator = Credentials => SignUpAction;
export type SignUpSuccessActionCreator = UnconfirmedUser => SignUpSuccessAction;
export type SignUpConfirmActionCreator = SignUpConfirm => SignUpConfirmAction;
export type SignOutActionCreator = () => SignOutAction;
export type AuthenticateActionCreator = boolean => AuthenticateAction;
export type UnsetCurrentUnconfirmedUserActionCreator = () => UnsetCurrentUnconfirmedUserAction;
export type SetCurrentUserActionCreator = User => SetCurrentUserAction;
export type UnsetCurrentUserActionCreator = () => UnsetCurrentUserAction;
export type EstablishCurrentUserActionCreator = () => EstablishCurrentUserAction;
export type GetCurrentProfileActionCreator = number => GetCurrentProfileAction;
export type SetCurrentProfileActionCreator = Profile => SetCurrentProfileAction;
export type UnsetCurrentProfileActionCreator = () => UnsetCurrentProfileAction;
export type GetWorldsActionCreator = () => GetWorldsAction;
export type SetWorldsActionCreator = Array<World> => SetWorldsAction;
export type CreateWorldActionCreator = CreateWorldInput => CreateWorldAction;
export type UpdateWorldActionCreator = UpdateWorldInput => UpdateWorldAction;
export type UpdateWorldSuccessActionCreator = World => UpdateWorldSuccessAction;
export type UpdateWorldErrorActionCreator = Errors => UpdateWorldErrorAction;
export type GetWorldActionCreator = GetWorldQueryVariables => GetWorldAction;
export type SetWorldActionCreator = World => SetWorldAction;
export type UnsetWorldActionCreator = () => UnsetWorldAction;
export type SearchAllActionCreator = string => SearchAllAction;
export type SetSearchLoadingActionCreator = boolean => SetSearchLoadingAction;
export type SetSearchResultsActionCreator = SearchResults => SetSearchResultsAction;
export type UnsetSearchResultsActionCreator = () => UnsetSearchResultsAction;
