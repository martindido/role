import type { Location } from 'react-router-dom';
import type { User, UnconfirmedUser } from './User';
import type { SignUpConfirm, Credentials } from './Auth';
import type { Profile } from './Profile';
import type {
    CreateWorldInput,
    UpdateWorldInput,
    GetWorldQueryVariables,
    CreateGameInput,
    UpdateGameInput,
    GetGameQueryVariables
} from './GraphQL';
import type { World } from './World';
import type { Game } from './Game';
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
    GetWorldSuccessAction,
    GetWorldErrorAction,
    SetGameAction,
    GetGameAction,
    UpdateWorldErrorAction,
    UpdateWorldSuccessAction,
    UpdateWorldAction,
    CreateWorldAction,
    SetWorldsAction,
    ListWorldsAction,
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
    CreateGameSubmitAction,
    UpdateGameSubmitAction,
    SetPreviousLocationAction,
    SetNotFoundAction,
    SetLoadingAction,
    LoadWorldAction,
    LoadGameAction
} from './Action';

export type SetLoadingActionCreator = boolean => SetLoadingAction;
export type SetNotFoundActionCreator = boolean => SetNotFoundAction;
export type SetPreviousLocationActionCreator = Location => SetPreviousLocationAction;
export type LoadWorldActionCreator = string => LoadWorldAction;
export type LoadGameActionCreator = string => LoadGameAction;
export type CreateWorldSubmitActionCreator = (CreateWorldInput, SubmitMeta) => CreateWorldSubmitAction;
export type UpdateWorldSubmitActionCreator = (UpdateWorldInput, SubmitMeta) => UpdateWorldSubmitAction;
export type CreateGameSubmitActionCreator = (CreateGameInput, SubmitMeta) => CreateGameSubmitAction;
export type UpdateGameSubmitActionCreator = (UpdateGameInput, SubmitMeta) => UpdateGameSubmitAction;
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
export type ListWorldsActionCreator = () => ListWorldsAction;
export type SetWorldsActionCreator = Array<World> => SetWorldsAction;
export type CreateWorldActionCreator = CreateWorldInput => CreateWorldAction;
export type UpdateWorldActionCreator = UpdateWorldInput => UpdateWorldAction;
export type UpdateWorldSuccessActionCreator = World => UpdateWorldSuccessAction;
export type UpdateWorldErrorActionCreator = Errors => UpdateWorldErrorAction;
export type GetWorldActionCreator = string => GetWorldAction;
export type GetWorldSuccessActionCreator = World => GetWorldSuccessAction;
export type GetWorldErrorActionCreator = Errors => GetWorldErrorAction;
export type SetWorldActionCreator = World => SetWorldAction;
export type GetGameActionCreator = string => GetGameAction;
export type SetGameActionCreator = Game => SetGameAction;
export type UnsetWorldActionCreator = () => UnsetWorldAction;
export type SearchAllActionCreator = string => SearchAllAction;
export type SetSearchLoadingActionCreator = boolean => SetSearchLoadingAction;
export type SetSearchResultsActionCreator = SearchResults => SetSearchResultsAction;
export type UnsetSearchResultsActionCreator = () => UnsetSearchResultsAction;
