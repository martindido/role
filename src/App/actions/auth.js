import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_UP_CONFIRM,
    SIGN_UP_CONFIRM_SUCCESS,
    SIGN_UP_CONFIRM_ERROR,
    SET_CURRENT_UNCONFIRMED_USER,
    UNSET_CURRENT_UNCONFIRMED_USER,
    SIGN_OUT,
    AUTHENTICATE,
    SET_CURRENT_USER,
    UNSET_CURRENT_USER
} from '../constants/actions';

import type {
    SignInAction,
    SignInSuccessAction,
    SignInErrorAction,
    SignUpAction,
    SignUpSuccessAction,
    SignUpErrorAction,
    SignUpConfirmAction,
    SignUpConfirmSuccessAction,
    SignUpConfirmErrorAction,
    SetCurrentUnconfirmedUserAction,
    UnsetCurrentUnconfirmedUserAction,
    SignOutAction,
    AuthenticateAction,
    SetCurrentUserAction,
    UnsetCurrentUserAction
} from '../types/Action';
import type { User } from '../types/User';
import type { Credentials, Confirmation } from '../types/Auth';
import type { Error } from '../types/Submit';

export function signIn(credentials: Credentials): SignInAction {
    return {
        type: SIGN_IN,
        payload: credentials
    };
}

export function signInSuccess(user: User): SignInSuccessAction {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    };
}

export function signInError(error: Error): SignInErrorAction {
    return {
        type: SIGN_IN_ERROR,
        payload: error
    };
}

export function signUp(credentials: Credentials): SignUpAction {
    return {
        type: SIGN_UP,
        payload: credentials
    };
}

export function signUpSuccess(user: User): SignUpSuccessAction {
    return {
        type: SIGN_UP_SUCCESS,
        payload: user
    };
}

export function signUpError(error: Error): SignUpErrorAction {
    return {
        type: SIGN_UP_ERROR,
        payload: error
    };
}

export function signUpConfirm(confirmation: Confirmation): SignUpConfirmAction {
    return {
        type: SIGN_UP_CONFIRM,
        payload: confirmation
    };
}

export function signUpConfirmSuccess(result: string): SignUpConfirmSuccessAction {
    return {
        type: SIGN_UP_CONFIRM_SUCCESS,
        payload: result
    };
}

export function signUpConfirmError(error: Error): SignUpConfirmErrorAction {
    return {
        type: SIGN_UP_CONFIRM_ERROR,
        payload: error
    };
}

export function setCurrentUnconfirmedUser(user: User): SetCurrentUnconfirmedUserAction {
    return {
        type: SET_CURRENT_UNCONFIRMED_USER,
        payload: user
    };
}

export function unsetCurrentUnconfirmedUser(): UnsetCurrentUnconfirmedUserAction {
    return {
        type: UNSET_CURRENT_UNCONFIRMED_USER
    };
}

export function signOut(): SignOutAction {
    return {
        type: SIGN_OUT
    };
}

export function authenticate(isAuthenticated: boolean): AuthenticateAction {
    return {
        type: AUTHENTICATE,
        payload: isAuthenticated
    };
}

export function setCurrentUser(user: User): SetCurrentUserAction {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
}

export function unsetCurrentUser(): UnsetCurrentUserAction {
    return {
        type: UNSET_CURRENT_USER
    };
}
