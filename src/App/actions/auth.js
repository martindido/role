import {
    SIGN_IN,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_VALIDATE,
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
    SignUpValidateAction,
    UnsetCurrentUnconfirmedUserAction,
    LogoutAction,
    AuthenticateAction,
    SetCurrentUserAction,
    UnsetCurrentUserAction,
    EstablishCurrentUserAction
} from '../types/Action';
import type { User, UnconfirmedUser } from '../types/User';
import type { SignUpValidation } from '../types/Validations';

export function signIn(user: User): SignInAction {
    return {
        type: SIGN_IN,
        payload: user
    };
};

export function signUp(user: User): SignUpAction {
    return {
        type: SIGN_UP,
        payload: user
    };
};

export function signUpSuccess(unconfirmedUser: UnconfirmedUser): SignUpSuccessAction {
    return {
        type: SIGN_UP_SUCCESS,
        payload: unconfirmedUser
    };
};

export function signUpValidate(validation: SignUpValidation): SignUpValidateAction {
    return {
        type: SIGN_UP_VALIDATE,
        payload: validation
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
