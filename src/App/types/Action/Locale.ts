import {
    getCurrentLanguage,
    getCurrentLanguageError,
    getCurrentLanguageSuccess,
    setCurrentLanguage,
    setCurrentLanguageError,
    setCurrentLanguageSuccess
} from '../../actions/locale';
import { Language } from '../Locale';
import { AmplifyError } from '../Sync';

export type SetCurrentLanguageAction = {
    type: 'SET_CURRENT_LANGUAGE';
    payload: Language;
};

export type SetCurrentLanguageActionCreator = typeof setCurrentLanguage;

export type SetCurrentLanguageSuccessAction = {
    type: 'SET_CURRENT_LANGUAGE_SUCCESS';
};

export type SetCurrentLanguageSuccessActionCreator = typeof setCurrentLanguageSuccess;

export type SetCurrentLanguageErrorAction = {
    type: 'SET_CURRENT_LANGUAGE_ERROR';
    payload: AmplifyError;
};

export type SetCurrentLanguageErrorActionCreator = typeof setCurrentLanguageError;

export type GetCurrentLanguageAction = {
    type: 'GET_CURRENT_LANGUAGE';
};

export type GetCurrentLanguageActionCreator = typeof getCurrentLanguage;

export type GetCurrentLanguageSuccessAction = {
    type: 'GET_CURRENT_LANGUAGE_SUCCESS';
    payload: Language;
};

export type GetCurrentLanguageSuccessActionCreator = typeof getCurrentLanguageSuccess;

export type GetCurrentLanguageErrorAction = {
    type: 'GET_CURRENT_LANGUAGE_ERROR';
    payload: AmplifyError;
};

export type GetCurrentLanguageErrorActionCreator = typeof getCurrentLanguageError;

export type LocaleAction =
    | SetCurrentLanguageAction
    | SetCurrentLanguageSuccessAction
    | SetCurrentLanguageErrorAction
    | GetCurrentLanguageAction
    | GetCurrentLanguageSuccessAction
    | GetCurrentLanguageErrorAction;
