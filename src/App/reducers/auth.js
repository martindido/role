import {
    SIGN_UP_SUCCESS,
    UNSET_CURRENT_UNCONFIRMED_USER,
    AUTHENTICATE,
    SET_CURRENT_USER,
    UNSET_CURRENT_USER
} from '../constants/actions';

import type { AuthAction } from "../types/Action";
import type { User, UnconfirmedUser } from "../types/User";

type State = {
    isAuthenticated: boolean,
    currentUser?: User,
    currentUnconfirmedUser?: UnconfirmedUser
};

export const initialState = {
    isAuthenticated: false
};
export const auth = (state: State = initialState, action: AuthAction) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUnconfirmedUser: action.payload
            };
        case UNSET_CURRENT_UNCONFIRMED_USER:
            return {
                ...state,
                currentUnconfirmedUser: undefined
            };
        case AUTHENTICATE:
            return {
                ...state,
                isAuthenticated: action.payload
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case UNSET_CURRENT_USER:
            return {
                ...state,
                currentUser: undefined
            };
        default:
            return state;
    }
};
