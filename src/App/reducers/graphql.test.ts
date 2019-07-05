import { fakeAction } from '../mocks/actions';
import {
    setGameAction,
    setWorldsAction,
    setWorldAction,
    unsetGameAction,
    unsetWorldAction
} from '../mocks/actions/graphql';
import { stateWithGame, stateWithWorld, stateWithWorlds } from '../mocks/reducers/graphql';

import * as reducer from './graphql';

describe('#initialState', () => {
    it('is an object', () => {
        expect(reducer.initialState).toBeObject();
    });
    it('has the corresponding attributes', () => {
        expect(Object.keys(reducer.initialState)).toEqual(['worlds']);
    });
    describe('#worlds', () => {
        it('is an array', () => {
            expect(reducer.initialState.worlds).toBeArray();
        });
        it('is empty', () => {
            expect(reducer.initialState.worlds).toBeEmpty();
        });
    });
});

describe('.graphql', () => {
    it('is an function', () => {
        expect(reducer.graphql).toBeFunction();
    });
    it('defaults the state argument to #initialState', () => {
        // @ts-ignore
        expect(reducer.graphql(undefined, fakeAction)).toEqual(reducer.initialState);
    });
    it('returns an unmodified state for an irrelevant action', () => {
        // @ts-ignore
        expect(reducer.graphql(stateWithWorlds, fakeAction)).toEqual(stateWithWorlds);
    });
    it('returns the corresponding state for a setWorldsAction', () => {
        expect(reducer.graphql(reducer.initialState, setWorldsAction)).toEqual(stateWithWorlds);
    });
    it('returns the corresponding state for a setWorldAction', () => {
        expect(reducer.graphql(reducer.initialState, setWorldAction)).toEqual(stateWithWorld);
    });
    it('returns the corresponding state for a unsetWorldAction', () => {
        expect(reducer.graphql(stateWithWorld, unsetWorldAction)).toEqual(reducer.initialState);
    });
    it('returns the corresponding state for a setGameAction', () => {
        expect(reducer.graphql(reducer.initialState, setGameAction)).toEqual(stateWithGame);
    });
    it('returns the corresponding state for a unsetGameAction', () => {
        expect(reducer.graphql(stateWithGame, unsetGameAction)).toEqual(reducer.initialState);
    });
});
