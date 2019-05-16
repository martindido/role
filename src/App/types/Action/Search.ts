import { setSearchLoading, setSearchResults, unsetSearchResults } from '../../actions/search';
import { SearchResults } from '../Search';

export type SetSearchLoadingAction = {
    type: 'SET_SEARCH_LOADING';
    payload: boolean;
};

export type SetSearchLoadingActionCreator = typeof setSearchLoading;

export type SetSearchResultsAction = {
    type: 'SET_SEARCH_RESULTS';
    payload: SearchResults;
};

export type SetSearchResultsActionCreator = typeof setSearchResults;

export type UnsetSearchResultsAction = {
    type: 'UNSET_SEARCH_RESULTS';
};

export type UnsetSearchResultsActionCreator = typeof unsetSearchResults;

export type SearchAction = SetSearchLoadingAction | SetSearchResultsAction | UnsetSearchResultsAction;
