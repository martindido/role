import { SET_SEARCH_LOADING, SET_SEARCH_RESULTS, UNSET_SEARCH_RESULTS } from '../../constants/actions';
import { SetSearchLoadingAction, SetSearchResultsAction, UnsetSearchResultsAction } from '../../types/Action/Search';
import { searchResults, searchResultsWithCategories } from '../search';

export const setSearchLoadingAction: SetSearchLoadingAction = {
    type: SET_SEARCH_LOADING,
    payload: true
};

export const unsetSearchLoadingAction: SetSearchLoadingAction = {
    type: SET_SEARCH_LOADING,
    payload: false
};

export const setSearchResultsAction: SetSearchResultsAction = {
    type: SET_SEARCH_RESULTS,
    payload: searchResults
};

export const setSearchResultsWithCategoriesAction: SetSearchResultsAction = {
    type: SET_SEARCH_RESULTS,
    payload: searchResultsWithCategories
};

export const unsetSearchResultsAction: UnsetSearchResultsAction = {
    type: UNSET_SEARCH_RESULTS
};
