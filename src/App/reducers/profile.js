import {
    SET_CURRENT_PROFILE,
    UNSET_CURRENT_PROFILE
} from '../constants/actions';

import type { ProfileAction } from "../types/Action";
import type { Profile } from "../types/Profile";

type State = {
    currentProfile?: Profile
};

export const initialState = {};
export const profile = (state: State = initialState, action: ProfileAction) => {
    switch (action.type) {
        case SET_CURRENT_PROFILE:
            return {
                ...state,
                currentProfile: action.payload
            };
        case UNSET_CURRENT_PROFILE:
            return {
                ...state,
                currentProfile: undefined
            };
        default:
            return state;
    }
};
