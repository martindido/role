import {
    GET_CURRENT_LANGUAGE,
    GET_CURRENT_LANGUAGE_ERROR,
    GET_CURRENT_LANGUAGE_SUCCESS,
    SET_CURRENT_LANGUAGE,
    SET_CURRENT_LANGUAGE_ERROR,
    SET_CURRENT_LANGUAGE_SUCCESS,
} from '../constants/actions';
import {
    GetCurrentLanguageAction,
    GetCurrentLanguageErrorAction,
    GetCurrentLanguageSuccessAction,
    SetCurrentLanguageAction,
    SetCurrentLanguageErrorAction,
    SetCurrentLanguageSuccessAction,
} from '../types/Action/Locale';
import { Language } from '../types/Locale';
import { AmplifyError } from '../types/Sync';

export function setCurrentLanguage(language: Language): SetCurrentLanguageAction {
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

export function setCurrentLanguageError(error: AmplifyError): SetCurrentLanguageErrorAction {
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

export function getCurrentLanguageError(error: AmplifyError): GetCurrentLanguageErrorAction {
    return {
        type: GET_CURRENT_LANGUAGE_ERROR,
        payload: error
    };
}
