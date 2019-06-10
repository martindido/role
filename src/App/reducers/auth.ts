import {
    SET_CURRENT_UNCONFIRMED_USER,
    SET_CURRENT_USER,
    UNSET_CURRENT_UNCONFIRMED_USER,
    UNSET_CURRENT_USER
} from '../constants/actions';
import { AuthAction } from '../types/Action/Auth';
import { AuthState } from '../types/State/Auth';

export const initialState: AuthState = {
    isAuthenticated: false
};
export const auth = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case SET_CURRENT_UNCONFIRMED_USER:
            return {
                ...state,
                currentUnconfirmedUser: action.payload
            };
        case UNSET_CURRENT_UNCONFIRMED_USER:
            return unset(state, 'currentUnconfirmedUser');
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticated: true
            };
        case UNSET_CURRENT_USER:
            return unset(state, ['currentUser', 'isAuthenticated']);
        default:
            return state;
    }
};

function unset(state: AuthState, attributes: string | string[]) {
    const newState = { ...state };

    if (typeof attributes === 'string') {
        attributes = [attributes];
    }
    for (const attribute of attributes) {
        const key = attribute as keyof AuthState;

        if (newState.hasOwnProperty(key)) {
            delete newState[key];
        }
    }
    return newState;
}
