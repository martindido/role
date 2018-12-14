import {
    UPDATE_GAME_SUBMIT,
    UPDATE_GAME_SUCCESS,
    UPDATE_GAME_ERROR,
    SET_GAME,
    GET_WORLD_SUCCESS,
    GET_WORLD_ERROR
} from '../../../constants/actions';
import { updateGame, setGame, getWorld, setWorld } from '../../../actions/graphql';
import { ofType } from 'redux-observable';
import { mergeMap, map, take, tap, startWith } from 'rxjs/operators';
import { SubmissionError } from 'redux-form';

import type { ActionsObservable } from 'redux-observable';
import type { UpdateGameSubmitAction } from '../../../types/Action';

export default (action$: ActionsObservable<UpdateGameSubmitAction>) =>
    action$.pipe(
        ofType(UPDATE_GAME_SUBMIT),
        mergeMap(action =>
            action$.pipe(
                ofType(UPDATE_GAME_SUCCESS, UPDATE_GAME_ERROR),
                take(1),
                resolveOrReject(action),
                ofType(UPDATE_GAME_SUCCESS),
                mergeMap(action => [
                    setGame(action.payload),
                    getWorld(action.payload.world.id)
                ]),
                mergeMap(action => {
                    if (action.type === SET_GAME) {
                        return [action];
                    }
                    return action$.pipe(
                        ofType(GET_WORLD_SUCCESS, GET_WORLD_ERROR),
                        take(1),
                        ofType(GET_WORLD_SUCCESS),
                        map(action => setWorld(action.payload)),
                        startWith(action)
                    )
                }),
                startWith(updateGame(action.payload))
            )
        )
    );

function resolveOrReject(action) {
    return tap(newAction => {
        if (newAction.type === UPDATE_GAME_SUCCESS) {
            action.meta.resolve(newAction.payload);
        }
        else {
            action.meta.reject(new SubmissionError({
                _error: 'An unexpected error occurred'
            }));
        }
    });
}
