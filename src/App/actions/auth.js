import {
    LOGIN,
    LOGOUT,
    AUTHENTICATE,
    SET_CURRENT_USER,
    UNSET_CURRENT_USER,
    ESTABLISH_CURRENT_USER
} from '../constants/actions';

import type {
    LoginAction,
    LogoutAction,
    AuthenticateAction,
    SetCurrentUserAction,
    UnsetCurrentUserAction,
    EstablishCurrentUserAction
} from '../types/Action';
import type { User } from '../types/User';

export function login(user: User): LoginAction {
    return {
        type: LOGIN,
        payload: user
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
