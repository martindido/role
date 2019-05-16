import { SET_SEARCH_LOADING, SET_SEARCH_RESULTS, UNSET_SEARCH_RESULTS } from '../constants/actions';
import { SearchAction } from '../types/Action/Search';
import { SearchState } from '../types/State/Search';

export const initialState: SearchState = {
    results: [],
    isLoading: false
};
export const search = (state: SearchState = initialState, action: SearchAction) => {
    switch (action.type) {
        case SET_SEARCH_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                results: action.payload,
                isLoading: false
            };
        case UNSET_SEARCH_RESULTS:
            return {
                ...state,
                results: [],
                isLoading: false
            };
        default:
            return state;
    }
};
