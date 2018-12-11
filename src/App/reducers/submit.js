import {
    SET_SUBMIT_SUCCESS,
    SET_SUBMIT_ERRORS,
    UNSET_SUBMIT
} from '../constants/actions';

import type { SubmitAction } from '../types/Action';

export type State = {
    success?: {},
    errors?: []
};

export const initialState = {};
export const submit = (state: State = initialState, action: SubmitAction) => {
    switch (action.type) {
        case SET_SUBMIT_SUCCESS:
            return {
                ...state,
                success: action.payload,
                errors: undefined
            };
        case SET_SUBMIT_ERRORS:
            return {
                ...state,
                errors: action.payload,
                success: undefined
            };
        case UNSET_SUBMIT:
            return {
                ...state,
                success: undefined,
                errors: undefined
            };
        default:
            return state;
    }
};
