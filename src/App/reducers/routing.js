import {
    SET_LOADING,
    SET_NOT_FOUND
} from '../constants/actions';

import type { SetLoadingAction } from '../types/Action';
type State = {
    isLoading: boolean,
    isNotFound: boolean
};

export const initialState = {
    isLoading: false,
    isNotFound: false
};
export const routing = (state: State = initialState, action: SetLoadingAction) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_NOT_FOUND:
            return {
                ...state,
                isNotFound: action.payload
            };
        default:
            return state;
    }
};
