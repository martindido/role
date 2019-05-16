import { Location } from 'history';

import { setLoading, setNotFound, setPreviousLocation } from '../../actions/routing';

export type SetLoadingAction = {
    type: 'SET_LOADING';
    payload: boolean;
};

export type SetLoadingActionCreator = typeof setLoading;

export type SetNotFoundAction = {
    type: 'SET_NOT_FOUND';
    payload: boolean;
};

export type SetNotFoundActionCreator = typeof setNotFound;

export type SetPreviousLocationAction = {
    type: 'SET_PREVIOUS_LOCATION';
    payload: Location;
};

export type SetPreviousLocationActionCreator = typeof setPreviousLocation;

export type RoutingAction = SetLoadingAction | SetNotFoundAction | SetPreviousLocationAction;
