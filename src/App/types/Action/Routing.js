import type { Location } from 'react-router-dom';

export type SetLoadingAction = {
    type: 'SET_LOADING',
    payload: boolean
};

export type SetNotFoundAction = {
    type: 'SET_NOT_FOUND',
    payload: boolean
};

export type SetPreviousLocationAction = {
    type: 'SET_PREVIOUS_LOCATION',
    payload: Location
};

export type RoutingAction = SetLoadingAction | SetNotFoundAction | SetPreviousLocationAction;
