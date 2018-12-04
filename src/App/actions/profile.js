import {
    GET_CURRENT_PROFILE,
    SET_CURRENT_PROFILE,
    UNSET_CURRENT_PROFILE
} from '../constants/actions';

import type {
    GetCurrentProfileAction,
    SetCurrentProfileAction,
    UnsetCurrentProfileAction
} from '../types/Action';

import type { Profile } from '../types/Profile';

export function getCurrentProfile(id: number): GetCurrentProfileAction {
    return {
        type: GET_CURRENT_PROFILE,
        payload: id
    };
};

export function setCurrentProfile(profile: Profile): SetCurrentProfileAction {
    return {
        type: SET_CURRENT_PROFILE,
        payload: profile
    };
};

export function unsetCurrentProfile(): UnsetCurrentProfileAction {
    return {
        type: UNSET_CURRENT_PROFILE
    };
};
