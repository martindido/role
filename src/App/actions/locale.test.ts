import {
    getCurrentLanguageAction,
    getCurrentLanguageErrorAction,
    getCurrentLanguageErrorStringAction,
    getCurrentLanguageSuccessAction,
    setCurrentLanguageAction,
    setCurrentLanguageErrorAction,
    setCurrentLanguageErrorStringAction,
    setCurrentLanguageSuccessAction
} from '../mocks/actions/locale';
import { error, errorString } from '../mocks/error';
import { LANGUAGE } from '../mocks/locale';

import * as actionCreators from './locale';

describe('.setCurrentLanguage', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.setCurrentLanguage(LANGUAGE)).toEqual(setCurrentLanguageAction);
    });
});

describe('.setCurrentLanguageSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.setCurrentLanguageSuccess()).toEqual(setCurrentLanguageSuccessAction);
    });
});

describe('.setCurrentLanguageError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.setCurrentLanguageError(error)).toEqual(setCurrentLanguageErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.setCurrentLanguageError(errorString)).toEqual(setCurrentLanguageErrorStringAction);
    });
});

describe('.getCurrentLanguage', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.getCurrentLanguage()).toEqual(getCurrentLanguageAction);
    });
});

describe('.getCurrentLanguageSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.getCurrentLanguageSuccess(LANGUAGE)).toEqual(getCurrentLanguageSuccessAction);
    });
});

describe('.getCurrentLanguageError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.getCurrentLanguageError(error)).toEqual(getCurrentLanguageErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.getCurrentLanguageError(errorString)).toEqual(getCurrentLanguageErrorStringAction);
    });
});
