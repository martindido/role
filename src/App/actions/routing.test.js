import * as actionCreators from './routing';
import {
    setLoadingAction,
    unsetLoadingAction,
    setNotFoundAction,
    unsetNotFoundAction,
    setPreviousLocationAction
} from '../types/Action.mock';
import { location } from '../types/Router.mock';

describe('.setLoading', () => {
    it('returns the corresponding action when loading', () => {
        expect(actionCreators.setLoading(true)).toEqual(setLoadingAction);
    });
    it('returns the corresponding action when not loading', () => {
        expect(actionCreators.setLoading(false)).toEqual(unsetLoadingAction);
    });
});

describe('.setNotFound', () => {
    it('returns the corresponding action when not found', () => {
        expect(actionCreators.setNotFound(true)).toEqual(setNotFoundAction);
    });
    it('returns the corresponding action when found', () => {
        expect(actionCreators.setNotFound(false)).toEqual(unsetNotFoundAction);
    });
});

describe('.setPreviousLocation', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.setPreviousLocation(location)).toEqual(setPreviousLocationAction);
    });
});
