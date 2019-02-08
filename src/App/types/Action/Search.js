import type { SearchResults } from '../Search';

export type SetSearchLoadingAction = {
    type: 'SET_SEARCH_LOADING',
    payload: boolean
};

export type SetSearchResultsAction = {
    type: 'SET_SEARCH_RESULTS',
    payload: SearchResults
};

export type UnsetSearchResultsAction = {
    type: 'UNSET_SEARCH_RESULTS'
};

export type SearchAction = SetSearchLoadingAction | SetSearchResultsAction | UnsetSearchResultsAction;
