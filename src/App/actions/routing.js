import {
    SET_LOADING,
    SET_NOT_FOUND
} from '../constants/actions';

import type {
    SetLoadingAction,
    SetNotFoundAction
} from '../types/Action';

export function setLoading(loading:  boolean): SetLoadingAction {
    return {
        type: SET_LOADING,
        payload: loading
    };
}

export function setNotFound(isNotFount: boolean): SetNotFoundAction {
    return {
        type: SET_NOT_FOUND,
        payload: isNotFount
    };
}
