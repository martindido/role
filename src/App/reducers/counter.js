import {
    COMPLETE_UPDATE_COUNTER
} from '../constants/actions';

import type { Action } from "../types/Action";

type State = number;

export const counter = (state: State = 0, action: Action) => {
    switch (action.type) {
        case COMPLETE_UPDATE_COUNTER:
            return state + action.payload;
        default:
            return state;
    }
};
