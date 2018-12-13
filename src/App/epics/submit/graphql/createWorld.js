import {
    CREATE_WORLD_SUBMIT,
    CREATE_WORLD_SUCCESS,
    CREATE_WORLD_ERROR
} from '../../../constants/actions';
import { createWorld, setWorld } from '../../../actions/graphql';
import { ofType } from 'redux-observable';
import { mergeMap, map, take, tap, startWith } from 'rxjs/operators';
import { SubmissionError } from 'redux-form';

import type { ActionsObservable } from 'redux-observable';
import type { CreateWorldSubmitAction } from '../../../types/Action';

export default (action$: ActionsObservable<CreateWorldSubmitAction>) =>
    action$.pipe(
        ofType(CREATE_WORLD_SUBMIT),
        mergeMap(action =>
            action$.pipe(
                ofType(CREATE_WORLD_SUCCESS, CREATE_WORLD_ERROR),
                take(1),
                resolveOrReject(action),
                ofType(CREATE_WORLD_SUCCESS),
                map(action => setWorld(action.payload)),
                startWith(createWorld(action.payload))
            )
        )
    );

function resolveOrReject(action) {
    return tap(newAction => {
        if (newAction.type === CREATE_WORLD_SUCCESS) {
            action.meta.resolve(newAction.payload);
        }
        else {
            action.meta.reject(new SubmissionError({
                _error: 'An unexpected error occurred'
            }));
        }
    });
}
