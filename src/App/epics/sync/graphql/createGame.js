import {
    CREATE_GAME_SYNC,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_ERROR,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR
} from '../../../constants/actions';
import { createGame } from '../../../actions/graphql';
import { uploadFile } from '../../../actions/storage';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { CreateGameSyncAction } from '../../../types/Action/Sync';

export default (action$: ActionsObservable<CreateGameSyncAction>) =>
    action$.pipe(
        ofType(CREATE_GAME_SYNC),
        mergeMap(createGameSyncAction =>
            action$.pipe(
                ofType(CREATE_GAME_SUCCESS, CREATE_GAME_ERROR),
                take(1),
                onError(CREATE_GAME_ERROR, createGameSyncAction),
                ofType(CREATE_GAME_SUCCESS),
                onCreateGameSuccess(action$, createGameSyncAction),
                startWith(createGame(createGameSyncAction.payload.game))
            )
        )
    );

function onCreateGameSuccess(action$, createGameSyncAction) {
    return mergeMap(createGameSuccessAction =>
        action$.pipe(
            ofType(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR),
            take(1),
            onError(UPLOAD_FILE_ERROR, createGameSyncAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(createGameSyncAction, createGameSuccessAction),
            startWith(
                uploadFile({
                    slug: `${createGameSuccessAction.payload.id}.${createGameSuccessAction.payload.logo.extension}`,
                    file: createGameSyncAction.payload.logo
                })
            )
        )
    );
}

function onUploadFileSuccess(createGameSyncAction, createGameSuccessAction) {
    return tap(() => createGameSyncAction.meta.onSuccess(createGameSuccessAction.payload));
}

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}
