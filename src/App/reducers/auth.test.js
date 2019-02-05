import * as reducer from './auth';
import {
    signInAction,
    signOutAction,
    setCurrentUnconfirmedUserAction,
    unsetCurrentUnconfirmedUserAction
} from '../types/Action.mock';
import { stateAuthenticated, stateWithCurrentUnconfirmedUser } from './auth.mock';

describe('#initialState', () => {
    it('is an object', () => {
        expect(reducer.initialState).toBeObject;
    });
    it('has the corresponding attributes', () => {
        expect(Object.keys(reducer.initialState)).toEqual(['isAuthenticated']);
    });
    describe('#isAuthenticated', () => {
        it('is false', () => {
            expect(reducer.initialState.isAuthenticated).toBeFalse;
        });
    });
});

describe('.auth', () => {
    it('is an function', () => {
        expect(reducer.auth).toBeFunction;
    });
    it('defaults the state argument to #initialState', () => {
        expect(reducer.auth(undefined, signInAction)).toEqual(reducer.initialState);
    });
    it('returns an unmodified state for an irrelevant action', () => {
        expect(reducer.auth(stateAuthenticated, signOutAction)).toEqual(stateAuthenticated);
    });
    it('adds the corresponding currentUnconfirmedUser to the state for a setCurrentUnconfirmedUserAction', () => {
        expect(reducer.auth(reducer.initialState, setCurrentUnconfirmedUserAction)).toEqual({
            ...reducer.initialState,
            currentUnconfirmedUser: setCurrentUnconfirmedUserAction.payload
        });
    });
    it('removes the currentUnconfirmedUser from the state for an unsetCurrentUnconfirmedUserAction', () => {
        expect(reducer.auth(stateWithCurrentUnconfirmedUser, unsetCurrentUnconfirmedUserAction)).toEqual(
            reducer.initialState
        );
    });
});
