import {
    SET_LOADING,
    SET_NOT_FOUND
} from '../constants/actions';

import type {
    SetLoadingAction,
    SetNotFoundAction
} from '../types/Action';

export function setLoading(isLoading: boolean): SetLoadingAction {
    return {
        type: SET_LOADING,
        payload: isLoading
    };
}

export function setNotFound(isNotFount: boolean): SetNotFoundAction {
    return {
        type: SET_NOT_FOUND,
        payload: isNotFount
    };
}
