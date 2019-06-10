import {
    setLoadingAction,
    setNotFoundAction,
    setPreviousLocationAction,
    unsetLoadingAction,
    unsetNotFoundAction
} from '../mocks/actions/routing';
import { location } from '../mocks/router';

import * as actionCreators from './routing';

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
