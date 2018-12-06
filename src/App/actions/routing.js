import {
    SET_LOADING,
    SET_NOT_FOUND,
    SET_PREVIOUS_LOCATION
} from '../constants/actions';

import type { Location } from 'react-router-dom';
import type {
    SetLoadingAction,
    SetNotFoundAction,
    SetPreviousLocationAction
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

export function setPreviousLocation(location: Location): SetPreviousLocationAction {
    return {
        type: SET_PREVIOUS_LOCATION,
        payload: location
    };
}
