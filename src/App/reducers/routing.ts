import { SET_LOADING, SET_NOT_FOUND, SET_PREVIOUS_LOCATION } from '../constants/actions';
import { RoutingAction } from '../types/Action/Routing';
import { RoutingState } from '../types/State/Routing';

export const initialState: RoutingState = {
    isLoading: false,
    isNotFound: false
};
export const routing = (state: RoutingState = initialState, action: RoutingAction) => {
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
