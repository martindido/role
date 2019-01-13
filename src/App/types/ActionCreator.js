import type { Location } from 'react-router-dom';
import type { SignUpConfirm, Credentials } from './Auth';
import type { SubmitMeta, CreateWorldSubmit, CreateGameSubmit, UpdateWorldSubmit, UpdateGameSubmit } from './Submit';
import type { World } from './World';
import type { Game } from './Game';
import type {
    UnsetSearchResultsAction,
    SetSearchLoadingAction,
    SearchAllAction,
    EstablishCurrentUserAction,
    UnsetCurrentUnconfirmedUserAction,
    SignOutAction,
    SignUpConfirmAction,
    SignUpAction,
    SignInAction,
    SetWorldAction,
    CreateWorldSubmitAction,
    UpdateWorldSubmitAction,
    SetGameAction,
    CreateGameSubmitAction,
    UpdateGameSubmitAction,
    SetPreviousLocationAction,
    SetNotFoundAction,
    LoadWorldAction,
    LoadGameAction
} from './Action';

export type SetNotFoundActionCreator = boolean => SetNotFoundAction;
export type SetPreviousLocationActionCreator = Location => SetPreviousLocationAction;
export type LoadWorldActionCreator = string => LoadWorldAction;
export type LoadGameActionCreator = string => LoadGameAction;
export type SetWorldActionCreator = World => SetWorldAction;
export type CreateWorldSubmitActionCreator = (CreateWorldSubmit, SubmitMeta) => CreateWorldSubmitAction;
export type UpdateWorldSubmitActionCreator = (UpdateWorldSubmit, SubmitMeta) => UpdateWorldSubmitAction;
export type SetGameActionCreator = Game => SetGameAction;
export type CreateGameSubmitActionCreator = (CreateGameSubmit, SubmitMeta) => CreateGameSubmitAction;
export type UpdateGameSubmitActionCreator = (UpdateGameSubmit, SubmitMeta) => UpdateGameSubmitAction;
export type SignInActionCreator = Credentials => SignInAction;
export type SignUpActionCreator = Credentials => SignUpAction;
export type SignUpConfirmActionCreator = SignUpConfirm => SignUpConfirmAction;
export type SignOutActionCreator = () => SignOutAction;
export type UnsetCurrentUnconfirmedUserActionCreator = () => UnsetCurrentUnconfirmedUserAction;
export type EstablishCurrentUserActionCreator = () => EstablishCurrentUserAction;
export type SearchAllActionCreator = string => SearchAllAction;
export type SetSearchLoadingActionCreator = boolean => SetSearchLoadingAction;
export type UnsetSearchResultsActionCreator = () => UnsetSearchResultsAction;
