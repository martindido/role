import {
    AUTHENTICATE,
    AUTHENTICATE_ERROR,
    AUTHENTICATE_SUCCESS,
    SET_CURRENT_UNCONFIRMED_USER,
    SET_CURRENT_USER,
    SIGN_IN,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS,
    SIGN_OUT,
    SIGN_UP,
    SIGN_UP_CONFIRM,
    SIGN_UP_CONFIRM_ERROR,
    SIGN_UP_CONFIRM_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_UP_SUCCESS,
    UNSET_CURRENT_UNCONFIRMED_USER,
    UNSET_CURRENT_USER
} from '../../constants/actions';
import {
    AuthenticateAction,
    AuthenticateErrorAction,
    AuthenticateSuccessAction,
    SetCurrentUnconfirmedUserAction,
    SetCurrentUserAction,
    SignInAction,
    SignInErrorAction,
    SignInSuccessAction,
    SignOutAction,
    SignUpAction,
    SignUpConfirmAction,
    SignUpConfirmErrorAction,
    SignUpConfirmSuccessAction,
    SignUpErrorAction,
    SignUpSuccessAction,
    UnsetCurrentUnconfirmedUserAction,
    UnsetCurrentUserAction
} from '../../types/Action/Auth';
import { confirmation, credentials, credentialsWithEmail, RESULT } from '../auth';
import { authenticator } from '../aws-amplify';
import { error, errorString } from '../error';
import { user } from '../user';

export const authenticateAction: AuthenticateAction = {
    type: AUTHENTICATE
};

export const authenticateWithAuthenticatorAction: AuthenticateAction = {
    type: AUTHENTICATE,
    payload: authenticator
};

export const authenticateSuccessAction: AuthenticateSuccessAction = {
    type: AUTHENTICATE_SUCCESS,
    payload: user
};

export const authenticateErrorAction: AuthenticateErrorAction = {
    type: AUTHENTICATE_ERROR,
    payload: error
};

export const authenticateErrorStringAction: AuthenticateErrorAction = {
    type: AUTHENTICATE_ERROR,
    payload: errorString
};

export const signInAction: SignInAction = {
    type: SIGN_IN,
    payload: credentials
};

export const signInSuccessAction: SignInSuccessAction = {
    type: SIGN_IN_SUCCESS,
    payload: user
};

export const signInErrorAction: SignInErrorAction = {
    type: SIGN_IN_ERROR,
    payload: error
};

export const signInErrorStringAction: SignInErrorAction = {
    type: SIGN_IN_ERROR,
    payload: errorString
};

export const signUpAction: SignUpAction = {
    type: SIGN_UP,
    payload: credentialsWithEmail
};

export const signUpSuccessAction: SignUpSuccessAction = {
    type: SIGN_UP_SUCCESS,
    payload: user
};

export const signUpErrorAction: SignUpErrorAction = {
    type: SIGN_UP_ERROR,
    payload: error
};

export const signUpErrorStringAction: SignUpErrorAction = {
    type: SIGN_UP_ERROR,
    payload: errorString
};

export const signUpConfirmAction: SignUpConfirmAction = {
    type: SIGN_UP_CONFIRM,
    payload: confirmation
};

export const signUpConfirmSuccessAction: SignUpConfirmSuccessAction = {
    type: SIGN_UP_CONFIRM_SUCCESS,
    payload: RESULT
};

export const signUpConfirmErrorAction: SignUpConfirmErrorAction = {
    type: SIGN_UP_CONFIRM_ERROR,
    payload: error
};

export const signUpConfirmErrorStringAction: SignUpConfirmErrorAction = {
    type: SIGN_UP_CONFIRM_ERROR,
    payload: errorString
};

export const setCurrentUnconfirmedUserAction: SetCurrentUnconfirmedUserAction = {
    type: SET_CURRENT_UNCONFIRMED_USER,
    payload: user
};

export const unsetCurrentUnconfirmedUserAction: UnsetCurrentUnconfirmedUserAction = {
    type: UNSET_CURRENT_UNCONFIRMED_USER
};

export const signOutAction: SignOutAction = {
    type: SIGN_OUT
};

export const setCurrentUserAction: SetCurrentUserAction = {
    type: SET_CURRENT_USER,
    payload: user
};

export const unsetCurrentUserAction: UnsetCurrentUserAction = {
    type: UNSET_CURRENT_USER
};
