import {
    SET_CURRENT_UNCONFIRMED_USER,
    SET_CURRENT_USER,
    UNSET_CURRENT_UNCONFIRMED_USER,
    UNSET_CURRENT_USER
} from '../constants/actions';
import { AuthAction } from '../types/Action/Auth';
import { AuthState } from '../types/State/Auth';
import { unset } from '../utils/state';

export const initialState: AuthState = {};
export const auth = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case SET_CURRENT_UNCONFIRMED_USER:
            return {
                ...state,
                currentUnconfirmedUser: action.payload
            };
        case UNSET_CURRENT_UNCONFIRMED_USER:
            return unset<AuthState>(state, 'currentUnconfirmedUser');
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticated: true
            };
        case UNSET_CURRENT_USER:
            return unset<AuthState>(state, ['currentUser', 'isAuthenticated']);
        default:
            return state;
    }
};
