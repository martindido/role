import {
    CREATE_GAME_SUBMIT,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_ERROR
} from '../../../constants/actions';
import { createGame, setGame } from '../../../actions/graphql';
import { ofType } from 'redux-observable';
import { mergeMap, map, take, tap, startWith } from 'rxjs/operators';
import { SubmissionError } from 'redux-form';

import type { ActionsObservable } from 'redux-observable';
import type { CreateGameSubmitAction } from '../../../types/Action';

export default (action$: ActionsObservable<CreateGameSubmitAction>) =>
    action$.pipe(
        ofType(CREATE_GAME_SUBMIT),
        mergeMap(action =>
            action$.pipe(
                ofType(CREATE_GAME_SUCCESS, CREATE_GAME_ERROR),
                take(1),
                resolveOrReject(action),
                ofType(CREATE_GAME_SUCCESS),
                map(action => setGame(action.payload)),
                startWith(createGame(action.payload))
            )
        )
    );

function resolveOrReject(action) {
    return tap(newAction => {
        if (newAction.type === CREATE_GAME_SUCCESS) {
            action.meta.resolve(newAction.payload);
        }
        else {
            action.meta.reject(new SubmissionError({
                _error: 'An unexpected error occurred'
            }));
        }
    });
}
