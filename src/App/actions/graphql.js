import {
    GET_WORLDS,
    SET_WORLDS
} from '../constants/actions';

import type {
    GetWorldsAction,
    SetWorldsAction
} from '../types/Action';

export function getWorlds(): GetWorldsAction {
    return {
        type: GET_WORLDS
    };
};

export function setWorlds(worlds: []): SetWorldsAction {
    return {
        type: SET_WORLDS,
        payload: worlds
    };
};
