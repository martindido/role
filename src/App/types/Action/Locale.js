import type { AmplifyError } from '../Sync';

export type SetCurrentLanguageAction = {
    type: 'SET_CURRENT_LANGUAGE',
    payload: string
};

export type SetCurrentLanguageSuccessAction = {
    type: 'SET_CURRENT_LANGUAGE_SUCCESS'
};

export type SetCurrentLanguageErrorAction = {
    type: 'SET_CURRENT_LANGUAGE_ERROR',
    payload: AmplifyError
};

export type GetCurrentLanguageAction = {
    type: 'GET_CURRENT_LANGUAGE'
};

export type GetCurrentLanguageSuccessAction = {
    type: 'GET_CURRENT_LANGUAGE_SUCCESS',
    payload: string
};

export type GetCurrentLanguageErrorAction = {
    type: 'GET_CURRENT_LANGUAGE_ERROR',
    payload: AmplifyError
};

export type LocaleAction =
    | SetCurrentLanguageAction
    | SetCurrentLanguageSuccessAction
    | SetCurrentLanguageErrorAction
    | GetCurrentLanguageAction
    | GetCurrentLanguageSuccessAction
    | GetCurrentLanguageErrorAction;
