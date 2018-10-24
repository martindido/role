import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    COMPLETE_UPDATE_COUNTER
} from '../constants/actions';

import type { Action } from '../types/Action';

export function increment(amount: number): Action {
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    };
}

export function decrement(amount: number): Action {
    return {
        type: DECREMENT_COUNTER,
        payload: amount
    };
}

export function completeUpdate(amount: number): Action {
    return {
        type: COMPLETE_UPDATE_COUNTER,
        payload: amount
    };
}
