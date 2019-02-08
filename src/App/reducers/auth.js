import {
    SET_CURRENT_UNCONFIRMED_USER,
    UNSET_CURRENT_UNCONFIRMED_USER,
    SET_CURRENT_USER,
    UNSET_CURRENT_USER
} from '../constants/actions';

import type { AuthAction } from '../types/Action/Auth';
import type { User } from '../types/User';

export type State = {
    isAuthenticated: boolean,
    currentUser?: User,
    currentUnconfirmedUser?: User
};

export const initialState: State = {
    isAuthenticated: false
};
export const auth = (state: State = initialState, action: AuthAction) => {
    switch (action.type) {
        case SET_CURRENT_UNCONFIRMED_USER:
            return set(state, 'currentUnconfirmedUser', action.payload);
        case UNSET_CURRENT_UNCONFIRMED_USER:
            return unset(state, 'currentUnconfirmedUser');
        case SET_CURRENT_USER:
            return set(state, {
                currentUser: action.payload,
                isAuthenticated: true
            });
        case UNSET_CURRENT_USER:
            return unset(state, ['currentUser', 'isAuthenticated']);
        default:
            return state;
    }
};

function set(state, attributes, value) {
    if (typeof attributes === 'string') {
        attributes = {
            [attributes]: value
        };
    }
    return {
        ...state,
        ...attributes
    };
}

function unset(state, attributes) {
    const newState = { ...state };

    if (typeof attributes === 'string') {
        attributes = [attributes];
    }
    for (const attribute of attributes) {
        delete newState[attribute];
    }
    return newState;
}
