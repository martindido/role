import {
    AUTHENTICATE,
    SET_CURRENT_USER
} from '../constants/actions';

import type { AuthAction } from "../types/Action";
import type { User } from "../types/User";

type State = {
    isAuthenticated: boolean,
    currentUser?: User
};

export const initialState = {
    isAuthenticated: false
};
export const auth = (state: State = initialState, action: AuthAction) => {
    switch (action.type) {
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
        default:
            return state;
    }
};
