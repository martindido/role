import { fakeAction } from '../mocks/actions';
import {
    setSearchLoadingAction,
    setSearchResultsAction,
    setSearchResultsWithCategoriesAction,
    unsetSearchLoadingAction,
    unsetSearchResultsAction
} from '../mocks/actions/search';
import {
    stateSearchLoading,
    stateWithSearchResults,
    stateWithSearchResultsWithCategories
} from '../mocks/reducers/search';

import * as reducer from './search';

describe('#initialState', () => {
    it('is an object', () => {
        expect(reducer.initialState).toBeObject();
    });
    it('has the corresponding attributes', () => {
        expect(Object.keys(reducer.initialState)).toEqual(['results', 'isLoading']);
    });
    describe('#v', () => {
        it('is an array', () => {
            expect(reducer.initialState.results).toBeArray();
        });
        it('is empty', () => {
            expect(reducer.initialState.results).toBeEmpty();
        });
    });
    describe('#isLoading', () => {
        it('is a boolean', () => {
            expect(reducer.initialState.isLoading).toBeBoolean();
        });
        it('is false', () => {
            expect(reducer.initialState.isLoading).toBeFalse();
        });
    });
});

describe('.search', () => {
    it('is an function', () => {
        expect(reducer.search).toBeFunction();
    });
    it('defaults the state argument to #initialState', () => {
        // @ts-ignore
        expect(reducer.search(undefined, fakeAction)).toEqual(reducer.initialState);
    });
    it('returns an unmodified state for an irrelevant action', () => {
        // @ts-ignore
        expect(reducer.search(stateSearchLoading, fakeAction)).toEqual(stateSearchLoading);
    });
    it('returns the corresponding state for a setSearchLoadingAction', () => {
        expect(reducer.search(reducer.initialState, setSearchLoadingAction)).toEqual(stateSearchLoading);
    });
    it('returns the corresponding state for a unsetSearchLoadingAction', () => {
        expect(reducer.search(stateSearchLoading, unsetSearchLoadingAction)).toEqual(reducer.initialState);
    });
    it('returns the corresponding state for a setSearchResultsAction', () => {
        expect(reducer.search(reducer.initialState, setSearchResultsAction)).toEqual(stateWithSearchResults);
    });
    it('returns the corresponding state for a setSearchResultsWithCategoriesAction', () => {
        expect(reducer.search(reducer.initialState, setSearchResultsWithCategoriesAction)).toEqual(
            stateWithSearchResultsWithCategories
        );
    });
    it('returns the corresponding state for a unsetSearchResultsAction', () => {
        expect(reducer.search(stateWithSearchResults, unsetSearchResultsAction)).toEqual(reducer.initialState);
    });
});
