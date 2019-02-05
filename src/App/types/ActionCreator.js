import type { Location } from 'react-router-dom';
import type {
    SubmitMeta,
    SignInSubmit,
    SignUpSubmit,
    SignUpConfirmSubmit,
    CreateWorldSubmit,
    CreateGameSubmit,
    UpdateWorldSubmit,
    UpdateGameSubmit
} from './Submit';
import type {
    UnsetSearchResultsAction,
    SetSearchLoadingAction,
    SearchAllAction,
    SetCurrentUnconfirmedUserAction,
    UnsetCurrentUnconfirmedUserAction,
    SignOutAction,
    SignUpSubmitAction,
    SignUpConfirmSubmitAction,
    SignInSubmitAction,
    AuthenticateAction,
    CreateWorldSubmitAction,
    UpdateWorldSubmitAction,
    CreateGameSubmitAction,
    UpdateGameSubmitAction,
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
export type CreateWorldSubmitActionCreator = (CreateWorldSubmit, SubmitMeta) => CreateWorldSubmitAction;
export type UpdateWorldSubmitActionCreator = (UpdateWorldSubmit, SubmitMeta) => UpdateWorldSubmitAction;
export type CreateGameSubmitActionCreator = (CreateGameSubmit, SubmitMeta) => CreateGameSubmitAction;
export type UpdateGameSubmitActionCreator = (UpdateGameSubmit, SubmitMeta) => UpdateGameSubmitAction;
export type SignInSubmitActionCreator = (SignInSubmit, SubmitMeta) => SignInSubmitAction;
export type SignUpSubmitActionCreator = (SignUpSubmit, SubmitMeta) => SignUpSubmitAction;
export type SignUpConfirmSubmitActionCreator = (SignUpConfirmSubmit, SubmitMeta) => SignUpConfirmSubmitAction;
export type SignOutActionCreator = () => SignOutAction;
export type AuthenticateActionCreator = () => AuthenticateAction;
export type SetCurrentUnconfirmedUserActionCreator = User => SetCurrentUnconfirmedUserAction;
export type UnsetCurrentUnconfirmedUserActionCreator = () => UnsetCurrentUnconfirmedUserAction;
export type SearchAllActionCreator = string => SearchAllAction;
export type SetSearchLoadingActionCreator = boolean => SetSearchLoadingAction;
export type UnsetSearchResultsActionCreator = () => UnsetSearchResultsAction;
