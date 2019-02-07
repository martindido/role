import {
    SET_CURRENT_LANGUAGE,
    SET_CURRENT_LANGUAGE_SUCCESS,
    SET_CURRENT_LANGUAGE_ERROR,
    GET_CURRENT_LANGUAGE,
    GET_CURRENT_LANGUAGE_SUCCESS,
    GET_CURRENT_LANGUAGE_ERROR
} from '../constants/actions';

import type {
    SetCurrentLanguageAction,
    SetCurrentLanguageSuccessAction,
    SetCurrentLanguageErrorAction,
    GetCurrentLanguageAction,
    GetCurrentLanguageSuccessAction,
    GetCurrentLanguageErrorAction
} from '../types/Action';
import type { Error } from '../types/Sync';

export function setCurrentLanguage(language: string): SetCurrentLanguageAction {
    return {
        type: SET_CURRENT_LANGUAGE,
        payload: language
    };
}

export function setCurrentLanguageSuccess(): SetCurrentLanguageSuccessAction {
    return {
        type: SET_CURRENT_LANGUAGE_SUCCESS
    };
}

export function setCurrentLanguageError(error: Error): SetCurrentLanguageErrorAction {
    return {
        type: SET_CURRENT_LANGUAGE_ERROR,
        payload: error
    };
}

export function getCurrentLanguage(): GetCurrentLanguageAction {
    return {
        type: GET_CURRENT_LANGUAGE
    };
}

export function getCurrentLanguageSuccess(language: string): GetCurrentLanguageSuccessAction {
    return {
        type: GET_CURRENT_LANGUAGE_SUCCESS,
        payload: language
    };
}

export function getCurrentLanguageError(error: Error): GetCurrentLanguageErrorAction {
    return {
        type: GET_CURRENT_LANGUAGE_ERROR,
        payload: error
    };
}
