import {
    UPDATE_GAME_SUBMIT,
    UPDATE_GAME_SUCCESS,
    UPDATE_GAME_ERROR,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR
} from '../../../constants/actions';
import { updateGame } from '../../../actions/graphql';
import { ofType } from 'redux-observable';
import { mergeMap, take, tap, startWith } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { UpdateGameSubmitAction } from '../../../types/Action';
import { uploadFile } from '../../../actions/storage';

export default (action$: ActionsObservable<UpdateGameSubmitAction>) =>
    action$.pipe(
        ofType(UPDATE_GAME_SUBMIT),
        mergeMap(updateGameSubmitAction =>
            action$.pipe(
                ofType(UPDATE_GAME_SUCCESS, UPDATE_GAME_ERROR),
                take(1),
                onError(UPDATE_GAME_ERROR, updateGameSubmitAction),
                ofType(UPDATE_GAME_SUCCESS),
                onUpdateGameSuccess(action$, updateGameSubmitAction),
                startWith(updateGame(updateGameSubmitAction.payload.game))
            )
        )
    )

function onUpdateGameSuccess(action$, updateGameSubmitAction) {
    if (!updateGameSubmitAction.payload.logo) {
        return onSuccess(updateGameSubmitAction);
    }
    return mergeMap(updateGameSuccessAction =>
        action$.pipe(
            ofType(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR),
            take(1),
            onError(UPLOAD_FILE_ERROR, updateGameSubmitAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(updateGameSubmitAction, updateGameSuccessAction),
            startWith(uploadFile({
                slug: `${ updateGameSubmitAction.payload.id }.${ updateGameSubmitAction.payload.logoExt }`,
                file: updateGameSubmitAction.payload.logo
            }))
        )
    );
}

function onSuccess(updateGameSubmitAction) {
    return tap(updateGameSuccessAction => updateGameSubmitAction.meta.onSuccess(updateGameSuccessAction.payload));
}

function onUploadFileSuccess(updateGameSubmitAction, updateGameSuccessAction) {
    return tap(() => updateGameSubmitAction.meta.onSuccess(updateGameSuccessAction.payload));
}

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}
