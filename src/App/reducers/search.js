import {
    SET_SEARCH_LOADING,
    SET_SEARCH_RESULTS,
    UNSET_SEARCH_RESULTS
} from '../constants/actions';

import type { SearchAction } from '../types/Action';
import type { SearchResults } from '../types/Search';
type State = {
    results: SearchResults,
    isLoading: boolean
};

export const initialState = {
    results: [],
    isLoading: false
};
export const search = (state: State = initialState, action: SearchAction) => {
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
