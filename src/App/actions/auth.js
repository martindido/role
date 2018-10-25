import {
    LOGIN,
    AUTHENTICATE,
    SET_CURRENT_USER,
    ESTABLISH_CURRENT_USER
} from '../constants/actions';

import type {
    LoginAction,
    AuthenticateAction,
    SetCurrentUserAction,
    EstablishCurrentUserAction
} from '../types/Action';
import type { User } from '../types/User';

export function login(user: User): LoginAction {
    return {
        type: LOGIN,
        payload: user
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


export function establishCurrentUser(): EstablishCurrentUserAction {
    return {
        type: ESTABLISH_CURRENT_USER
    };
}
