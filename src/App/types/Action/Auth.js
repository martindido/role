import type { Credentials, Confirmation, Authenticator } from '../Auth';
import type { User } from '../User';
import type { AmplifyError } from '../Sync';

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

export type AuthAction =
    | AuthenticateAction
    | AuthenticateSuccessAction
    | AuthenticateErrorAction
    | SignInAction
    | SignInSuccessAction
    | SignInErrorAction
    | SignUpAction
    | SignUpSuccessAction
    | SignUpErrorAction
    | SignUpConfirmAction
    | SignUpConfirmSuccessAction
    | SignUpConfirmErrorAction
    | SignOutAction
    | SetCurrentUnconfirmedUserAction
    | UnsetCurrentUnconfirmedUserAction
    | SetCurrentUserAction
    | UnsetCurrentUserAction;
