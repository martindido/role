import {
    setSearchLoadingAction,
    setSearchResultsAction,
    setSearchResultsWithCategoriesAction,
    unsetSearchLoadingAction,
    unsetSearchResultsAction
} from '../mocks/actions/search';
import { searchResults, searchResultsWithCategories } from '../mocks/search';

import * as actionCreators from './search';

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
