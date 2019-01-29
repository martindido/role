import * as actionCreators from './search';
import {
    setSearchLoadingAction,
    unsetSearchLoadingAction,
    setSearchResultsAction,
    setSearchResultsWithCategoriesAction,
    unsetSearchResultsAction
} from '../types/Action.mock';
import { searchResults, searchResultsWithCategories } from '../types/Search.mock';

describe('.setSearchLoading', () => {
    it('returns the corresponding action when loading', () => {
        expect(actionCreators.setSearchLoading(true)).toEqual(setSearchLoadingAction);
    });
    it('returns the corresponding action when not loading', () => {
        expect(actionCreators.setSearchLoading(false)).toEqual(unsetSearchLoadingAction);
    });
});

describe('.setSearchResults', () => {
    it('returns the corresponding action without categories', () => {
        expect(actionCreators.setSearchResults(searchResults)).toEqual(setSearchResultsAction);
    });
    it('returns the corresponding action with categories', () => {
        expect(actionCreators.setSearchResults(searchResultsWithCategories)).toEqual(
            setSearchResultsWithCategoriesAction
        );
    });
});

describe('.unsetSearchResults', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.unsetSearchResults()).toEqual(unsetSearchResultsAction);
    });
});
