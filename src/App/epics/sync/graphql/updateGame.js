import {
    UPDATE_GAME_SYNC,
    UPDATE_GAME_SUCCESS,
    UPDATE_GAME_ERROR,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR
} from '../../../constants/actions';
import { updateGame } from '../../../actions/graphql';
import { ofType } from 'redux-observable';
import { mergeMap, take, tap, startWith } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { UpdateGameSyncAction } from '../../../types/Action';
import { uploadFile } from '../../../actions/storage';

export default (action$: ActionsObservable<UpdateGameSyncAction>) =>
    action$.pipe(
        ofType(UPDATE_GAME_SYNC),
        mergeMap(updateGameSyncAction =>
            action$.pipe(
                ofType(UPDATE_GAME_SUCCESS, UPDATE_GAME_ERROR),
                take(1),
                onError(UPDATE_GAME_ERROR, updateGameSyncAction),
                ofType(UPDATE_GAME_SUCCESS),
                onUpdateGameSuccess(action$, updateGameSyncAction),
                startWith(updateGame(updateGameSyncAction.payload.game))
            )
        )
    );

function onUpdateGameSuccess(action$, updateGameSyncAction) {
    if (!updateGameSyncAction.payload.logo) {
        return onSuccess(updateGameSyncAction);
    }
    return mergeMap(updateGameSuccessAction =>
        action$.pipe(
            ofType(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR),
            take(1),
            onError(UPLOAD_FILE_ERROR, updateGameSyncAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(updateGameSyncAction, updateGameSuccessAction),
            startWith(
                uploadFile({
                    slug: `${updateGameSyncAction.payload.id}.${updateGameSyncAction.payload.logo.extension}`,
                    file: updateGameSyncAction.payload.logo
                })
            )
        )
    );
}

function onSuccess(updateGameSyncAction) {
    return tap(updateGameSuccessAction => updateGameSyncAction.meta.onSuccess(updateGameSuccessAction.payload));
}

function onUploadFileSuccess(updateGameSyncAction, updateGameSuccessAction) {
    return tap(() => updateGameSyncAction.meta.onSuccess(updateGameSuccessAction.payload));
}

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}
