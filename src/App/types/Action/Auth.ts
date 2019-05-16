import {
    authenticate,
    authenticateError,
    authenticateSuccess,
    setCurrentUnconfirmedUser,
    setCurrentUser,
    signIn,
    signInError,
    signInSuccess,
    signOut,
    signUp,
    signUpConfirm,
    signUpConfirmError,
    signUpConfirmSuccess,
    signUpError,
    signUpSuccess,
    unsetCurrentUnconfirmedUser
} from '../../actions/auth';
import { Authenticator, Confirmation, Credentials } from '../Auth';
import { AmplifyError } from '../Sync';
import { User } from '../User';

export type AuthenticateAction = {
    type: 'AUTHENTICATE';
    payload?: Authenticator;
};

export type AuthenticateActionCreator = typeof authenticate;

export type AuthenticateSuccessAction = {
    type: 'AUTHENTICATE_SUCCESS';
    payload: User;
};

export type AuthenticateSuccessActionCreator = typeof authenticateSuccess;

export type AuthenticateErrorAction = {
    type: 'AUTHENTICATE_ERROR';
    payload: AmplifyError;
};

export type AuthenticateErrorActionCreator = typeof authenticateError;

export type SignInAction = {
    type: 'SIGN_IN';
    payload: Credentials;
};

export type SignInActionCreator = typeof signIn;

export type SignInSuccessAction = {
    type: 'SIGN_IN_SUCCESS';
    payload: User;
};

export type SignInSuccessActionCreator = typeof signInSuccess;

export type SignInErrorAction = {
    type: 'SIGN_IN_ERROR';
    payload: AmplifyError;
};

export type SignInErrorActionCreator = typeof signInError;

export type SignUpAction = {
    type: 'SIGN_UP';
    payload: Credentials;
};

export type SignUpActionCreator = typeof signUp;

export type SignUpSuccessAction = {
    type: 'SIGN_UP_SUCCESS';
    payload: User;
};

export type SignUpSuccessActionCreator = typeof signUpSuccess;

export type SignUpErrorAction = {
    type: 'SIGN_UP_ERROR';
    payload: AmplifyError;
};

export type SignUpErrorActionCreator = typeof signUpError;

export type SignUpConfirmAction = {
    type: 'SIGN_UP_CONFIRM';
    payload: Confirmation;
};

export type SignUpConfirmActionCreator = typeof signUpConfirm;

export type SignUpConfirmSuccessAction = {
    type: 'SIGN_UP_CONFIRM_SUCCESS';
    payload: string;
};

export type SignUpConfirmSuccessActionCreator = typeof signUpConfirmSuccess;

export type SignUpConfirmErrorAction = {
    type: 'SIGN_UP_CONFIRM_ERROR';
    payload: AmplifyError;
};

export type SignUpConfirmErrorActionCreator = typeof signUpConfirmError;

export type SignOutAction = {
    type: 'SIGN_OUT';
};

export type SignOutActionCreator = typeof signOut;

export type SetCurrentUnconfirmedUserAction = {
    type: 'SET_CURRENT_UNCONFIRMED_USER';
    payload: User;
};

export type SetCurrentUnconfirmedUserActionCreator = typeof setCurrentUnconfirmedUser;

export type UnsetCurrentUnconfirmedUserAction = {
    type: 'UNSET_CURRENT_UNCONFIRMED_USER';
};

export type UnsetCurrentUnconfirmedUserActionCreator = typeof unsetCurrentUnconfirmedUser;

export type SetCurrentUserAction = {
    type: 'SET_CURRENT_USER';
    payload: User;
};

export type SetCurrentUserActionCreator = typeof setCurrentUser;

export type UnsetCurrentUserAction = {
    type: 'UNSET_CURRENT_USER';
};

export type UnsetCurrentUserActionCreator = typeof unsetCurrentUnconfirmedUser;

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
