import {
    setCurrentUnconfirmedUserAction,
    setCurrentUserAction,
    signInAction,
    signOutAction,
    unsetCurrentUnconfirmedUserAction,
    unsetCurrentUserAction
} from '../mocks/actions/auth';
import { stateAuthenticated, stateWithCurrentUnconfirmedUser, stateWithCurrentUser } from '../mocks/reducers/auth';

import * as reducer from './auth';

describe('#initialState', () => {
    it('is an object', () => {
        expect(reducer.initialState).toBeObject();
    });
    it('is empty', () => {
        expect(reducer.initialState).toBeEmpty();
    });
    describe('#isAuthenticated', () => {
        it('is undefined', () => {
            expect(reducer.initialState.isAuthenticated).toBeUndefined();
        });
    });
});

describe('.auth', () => {
    it('is an function', () => {
        expect(reducer.auth).toBeFunction();
    });
    it('defaults the state argument to #initialState', () => {
        expect(reducer.auth(undefined, signInAction)).toEqual(reducer.initialState);
    });
    it('returns an unmodified state for an irrelevant action', () => {
        expect(reducer.auth(stateAuthenticated, signOutAction)).toEqual(stateAuthenticated);
    });
    it('returns the corresponding state for a setCurrentUnconfirmedUserAction', () => {
        expect(reducer.auth(reducer.initialState, setCurrentUnconfirmedUserAction)).toEqual({
            ...reducer.initialState,
            currentUnconfirmedUser: setCurrentUnconfirmedUserAction.payload
        });
    });
    it('returns the corresponding state for a unsetCurrentUnconfirmedUserAction', () => {
        expect(reducer.auth(stateWithCurrentUnconfirmedUser, unsetCurrentUnconfirmedUserAction)).toEqual(
            reducer.initialState
        );
    });
    it('returns the corresponding state for a setCurrentUserAction', () => {
        expect(reducer.auth(reducer.initialState, setCurrentUserAction)).toEqual(stateWithCurrentUser);
    });
    it('returns the corresponding state for a unsetCurrentUserAction', () => {
        expect(reducer.auth(stateWithCurrentUser, unsetCurrentUserAction)).toEqual(reducer.initialState);
    });
});
