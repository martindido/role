import {
    UPDATE_WORLD_SUBMIT,
    UPDATE_WORLD_SUCCESS,
    UPDATE_WORLD_ERROR
} from '../../../constants/actions';
import { updateWorld, setWorld } from '../../../actions/graphql';
import { ofType } from 'redux-observable';
import { mergeMap, map, take, tap, startWith } from 'rxjs/operators';
import { SubmissionError } from 'redux-form';

import type { ActionsObservable } from 'redux-observable';
import type { UpdateWorldSubmitAction } from '../../../types/Action';

export default (action$: ActionsObservable<UpdateWorldSubmitAction>) =>
    action$.pipe(
        ofType(UPDATE_WORLD_SUBMIT),
        mergeMap(action =>
            action$.pipe(
                ofType(UPDATE_WORLD_SUCCESS, UPDATE_WORLD_ERROR),
                take(1),
                resolveOrReject(action),
                ofType(UPDATE_WORLD_SUCCESS),
                map(action => setWorld(action.payload)),
                startWith(updateWorld(action.payload))
            )
        )
    );

function resolveOrReject(action) {
    return tap(newAction => {
        if (newAction.type === UPDATE_WORLD_SUCCESS) {
            action.meta.resolve(newAction.payload);
        }
        else {
            action.meta.reject(new SubmissionError({
                _error: 'An unexpected error occurred'
            }));
        }
    });
}
