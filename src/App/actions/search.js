import {
    SET_SEARCH_LOADING,
    SET_SEARCH_RESULTS,
    UNSET_SEARCH_RESULTS
} from '../constants/actions';

import type {
    SetSearchLoadingAction,
    SetSearchResultsAction,
    UnsetSearchResultsAction
} from '../types/Action';
import type { SearchResults } from '../types/Search';

export function setSearchLoading(isLoading: boolean): SetSearchLoadingAction {
    return {
        type: SET_SEARCH_LOADING,
        payload: isLoading
    };
};

export function setSearchResults(searchResults: SearchResults): SetSearchResultsAction {
    return {
        type: SET_SEARCH_RESULTS,
        payload: searchResults
    };
};

export function unsetSearchResults(): UnsetSearchResultsAction {
    return {
        type: UNSET_SEARCH_RESULTS
    };
};
