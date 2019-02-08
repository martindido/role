import { SET_LOADING, SET_NOT_FOUND, SET_PREVIOUS_LOCATION } from '../constants/actions';

import type { Location } from 'react-router-dom';
import type { RoutingAction } from '../types/Action';

export type State = {
    isLoading: boolean,
    isNotFound: boolean,
    previousLocation?: Location
};

export const initialState: State = {
    isLoading: false,
    isNotFound: false
};
export const routing = (state: State = initialState, action: RoutingAction) => {
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
        case SET_PREVIOUS_LOCATION:
            return {
                ...state,
                previousLocation: action.payload
            };
        default:
            return state;
    }
};
