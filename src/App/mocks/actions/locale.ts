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
import { error, errorString } from '../error';
import { LANGUAGE } from '../locale';

export const setCurrentLanguageAction: SetCurrentLanguageAction = {
    type: SET_CURRENT_LANGUAGE,
    payload: LANGUAGE
};

export const setCurrentLanguageSuccessAction: SetCurrentLanguageSuccessAction = {
    type: SET_CURRENT_LANGUAGE_SUCCESS
};

export const setCurrentLanguageErrorAction: SetCurrentLanguageErrorAction = {
    type: SET_CURRENT_LANGUAGE_ERROR,
    payload: error
};

export const setCurrentLanguageErrorStringAction: SetCurrentLanguageErrorAction = {
    type: SET_CURRENT_LANGUAGE_ERROR,
    payload: errorString
};

export const getCurrentLanguageAction: GetCurrentLanguageAction = {
    type: GET_CURRENT_LANGUAGE
};

export const getCurrentLanguageSuccessAction: GetCurrentLanguageSuccessAction = {
    type: GET_CURRENT_LANGUAGE_SUCCESS,
    payload: LANGUAGE
};

export const getCurrentLanguageErrorAction: GetCurrentLanguageErrorAction = {
    type: GET_CURRENT_LANGUAGE_ERROR,
    payload: error
};

export const getCurrentLanguageErrorStringAction: GetCurrentLanguageErrorAction = {
    type: GET_CURRENT_LANGUAGE_ERROR,
    payload: errorString
};
