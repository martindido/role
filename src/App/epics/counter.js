import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../constants/actions';
import { completeUpdate } from '../actions/counter';
import { ofType } from 'redux-observable';
import { delay, map } from 'rxjs/operators';

import type { Action } from '../types/Action';
import type { ActionsObservable } from 'redux-observable';

export const increment = (action$: ActionsObservable<Action>) =>
    action$.pipe(
        ofType(INCREMENT_COUNTER),
        delay(5000),
        map((action: Action) => completeUpdate(action.payload))
    );

export const decrement = (action$: ActionsObservable<Action>) =>
    action$.pipe(
        ofType(DECREMENT_COUNTER),
        delay(5000),
        map((action: Action) => completeUpdate(-action.payload))
    );

