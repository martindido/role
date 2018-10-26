import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../constants/actions';
import { completeUpdate } from '../actions/counter';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

import type { IncrementAction, DecrementAction } from '../types/Action';
import type { ActionsObservable } from 'redux-observable';

export const increment = (action$: ActionsObservable<IncrementAction>) =>
    action$.pipe(
        ofType(INCREMENT_COUNTER),
        map((action: IncrementAction) => completeUpdate(action.payload))
    );

export const decrement = (action$: ActionsObservable<DecrementAction>) =>
    action$.pipe(
        ofType(DECREMENT_COUNTER),
        map((action: DecrementAction) => completeUpdate(-action.payload))
    );

