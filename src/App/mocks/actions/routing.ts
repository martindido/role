import { SET_LOADING, SET_NOT_FOUND, SET_PREVIOUS_LOCATION } from '../../constants/actions';
import { SetLoadingAction, SetNotFoundAction, SetPreviousLocationAction } from '../../types/Action/Routing';
import { location } from '../router';

export const setLoadingAction: SetLoadingAction = {
    type: SET_LOADING,
    payload: true
};

export const unsetLoadingAction: SetLoadingAction = {
    type: SET_LOADING,
    payload: false
};

export const setNotFoundAction: SetNotFoundAction = {
    type: SET_NOT_FOUND,
    payload: true
};

export const unsetNotFoundAction: SetNotFoundAction = {
    type: SET_NOT_FOUND,
    payload: false
};

export const setPreviousLocationAction: SetPreviousLocationAction = {
    type: SET_PREVIOUS_LOCATION,
    payload: location
};
