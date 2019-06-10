import {
    GET_CURRENT_LANGUAGE,
    GET_CURRENT_LANGUAGE_ERROR,
    GET_CURRENT_LANGUAGE_SUCCESS,
    SET_CURRENT_LANGUAGE,
    SET_CURRENT_LANGUAGE_ERROR,
    SET_CURRENT_LANGUAGE_SUCCESS
} from '../../constants/actions';
import {
    GetCurrentLanguageAction,
    GetCurrentLanguageErrorAction,
    GetCurrentLanguageSuccessAction,
    SetCurrentLanguageAction,
    SetCurrentLanguageErrorAction,
    SetCurrentLanguageSuccessAction
} from '../../types/Action/Locale';
import { error } from '../error';
import { LANGUAGE } from '../locale';

export const setCurrentLanguage: SetCurrentLanguageAction = {
    type: SET_CURRENT_LANGUAGE,
    payload: LANGUAGE
};

export const setCurrentLanguageSuccess: SetCurrentLanguageSuccessAction = {
    type: SET_CURRENT_LANGUAGE_SUCCESS
};

export const setCurrentLanguageError: SetCurrentLanguageErrorAction = {
    type: SET_CURRENT_LANGUAGE_ERROR,
    payload: error
};

export const getCurrentLanguage: GetCurrentLanguageAction = {
    type: GET_CURRENT_LANGUAGE
};

export const getCurrentLanguageSuccess: GetCurrentLanguageSuccessAction = {
    type: GET_CURRENT_LANGUAGE_SUCCESS,
    payload: LANGUAGE
};

export const getCurrentLanguageError: GetCurrentLanguageErrorAction = {
    type: GET_CURRENT_LANGUAGE_ERROR,
    payload: error
};
