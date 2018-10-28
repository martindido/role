import {
    SIGN_IN,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_CONFIRM,
    UNSET_CURRENT_UNCONFIRMED_USER,
    LOGOUT,
    AUTHENTICATE,
    SET_CURRENT_USER,
    UNSET_CURRENT_USER,
    ESTABLISH_CURRENT_USER
} from '../constants/actions';

import type {
    SignInAction,
    SignUpAction,
    SignUpSuccessAction,
    SignUpConfirmAction,
    UnsetCurrentUnconfirmedUserAction,
    LogoutAction,
    AuthenticateAction,
    SetCurrentUserAction,
    UnsetCurrentUserAction,
    EstablishCurrentUserAction
} from '../types/Action';
import type { User, UnconfirmedUser } from '../types/User';
import type { SignUpConfirm, Credentials } from '../types/Auth';

export function signIn(credentials: Credentials): SignInAction {
    return {
        type: SIGN_IN,
        payload: credentials
    };
};

export function signUp(credentials: Credentials): SignUpAction {
    return {
        type: SIGN_UP,
        payload: credentials
    };
};

export function signUpSuccess(unconfirmedUser: UnconfirmedUser): SignUpSuccessAction {
    return {
        type: SIGN_UP_SUCCESS,
        payload: unconfirmedUser
    };
};

export function signUpConfirm(confirmation: SignUpConfirm): SignUpConfirmAction {
    return {
        type: SIGN_UP_CONFIRM,
        payload: confirmation
    };
};

export function unsetCurrentUnconfirmedUser(): UnsetCurrentUnconfirmedUserAction {
    return {
        type: UNSET_CURRENT_UNCONFIRMED_USER
    };
};

export function logout(): LogoutAction {
    return {
        type: LOGOUT
    };
};

export function authenticate(isAuthenticated: boolean): AuthenticateAction {
    return {
        type: AUTHENTICATE,
        payload: isAuthenticated
    };
};

export function setCurrentUser(user: User): SetCurrentUserAction {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

export function unsetCurrentUser(): UnsetCurrentUserAction {
    return {
        type: UNSET_CURRENT_USER
    };
};


export function establishCurrentUser(): EstablishCurrentUserAction {
    return {
        type: ESTABLISH_CURRENT_USER
    };
};
