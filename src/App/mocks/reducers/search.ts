import { SearchState } from '../../types/State/Search';
import { searchResults, searchResultsWithCategories } from '../search';

export const stateSearchLoading: SearchState = {
    results: [],
    isLoading: true
};

export const stateWithSearchResults: SearchState = {
    results: searchResults,
    isLoading: false
};

export const stateWithSearchResultsWithCategories: SearchState = {
    results: searchResultsWithCategories,
    isLoading: false
};
