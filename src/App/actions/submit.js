import {
    SET_SUBMIT_SUCCESS,
    SET_SUBMIT_ERRORS
} from '../constants/actions';

import type {
    SetSubmitSuccessAction,
    SetSubmitErrorAction
} from '../types/Action';

export function setSubmitSuccess(success:  {}): SetSubmitSuccessAction {
    return {
        type: SET_SUBMIT_SUCCESS,
        payload: success
    };
}

export function setSubmitError(errors: Array<{} | string>): SetSubmitErrorAction {
    return {
        type: SET_SUBMIT_ERRORS,
        payload: errors
    };
}
