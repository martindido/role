import { fakeAction } from '../mocks/actions';
import {
    setLoadingAction,
    setNotFoundAction,
    setPreviousLocationAction,
    unsetLoadingAction,
    unsetNotFoundAction
} from '../mocks/actions/routing';
import { stateLoading, stateNotFound, stateWithPreviousLocation } from '../mocks/reducers/routing';

import * as reducer from './routing';

describe('#initialState', () => {
    it('is an object', () => {
        expect(reducer.initialState).toBeObject();
    });
    it('has the corresponding attributes', () => {
        expect(Object.keys(reducer.initialState)).toEqual(['isLoading', 'isNotFound']);
    });
    describe('#isLoading', () => {
        it('is a boolean', () => {
            expect(reducer.initialState.isLoading).toBeBoolean();
        });
        it('is false', () => {
            expect(reducer.initialState.isLoading).toBeFalse();
        });
    });
    describe('#isNotFound', () => {
        it('is a boolean', () => {
            expect(reducer.initialState.isNotFound).toBeBoolean();
        });
        it('is false', () => {
            expect(reducer.initialState.isNotFound).toBeFalse();
        });
    });
});

describe('.routing', () => {
    it('is an function', () => {
        expect(reducer.routing).toBeFunction();
    });
    it('defaults the state argument to #initialState', () => {
        // @ts-ignore
        expect(reducer.routing(undefined, fakeAction)).toEqual(reducer.initialState);
    });
    it('returns an unmodified state for an irrelevant action', () => {
        // @ts-ignore
        expect(reducer.routing(stateNotFound, fakeAction)).toEqual(stateNotFound);
    });
    it('returns the corresponding state for a setLoadingAction', () => {
        expect(reducer.routing(reducer.initialState, setLoadingAction)).toEqual(stateLoading);
    });
    it('returns the corresponding state for a unsetLoadingAction', () => {
        expect(reducer.routing(stateLoading, unsetLoadingAction)).toEqual(reducer.initialState);
    });
    it('returns the corresponding state for a setNotFoundAction', () => {
        expect(reducer.routing(reducer.initialState, setNotFoundAction)).toEqual(stateNotFound);
    });
    it('returns the corresponding state for a unsetNotFoundAction', () => {
        expect(reducer.routing(stateNotFound, unsetNotFoundAction)).toEqual(reducer.initialState);
    });
    it('returns the corresponding state for a setPreviousLocationAction', () => {
        expect(reducer.routing(reducer.initialState, setPreviousLocationAction)).toEqual(stateWithPreviousLocation);
    });
});
