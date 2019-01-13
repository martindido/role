import {
    CREATE_GAME_SUBMIT,
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
import type { CreateGameSubmitAction } from '../../../types/Action';

export default (action$: ActionsObservable<CreateGameSubmitAction>) =>
    action$.pipe(
        ofType(CREATE_GAME_SUBMIT),
        mergeMap(createGameSubmitAction =>
            action$.pipe(
                ofType(CREATE_GAME_SUCCESS, CREATE_GAME_ERROR),
                take(1),
                onError(CREATE_GAME_ERROR, createGameSubmitAction),
                ofType(CREATE_GAME_SUCCESS),
                onCreateGameSuccess(action$, createGameSubmitAction),
                startWith(createGame(createGameSubmitAction.payload.game))
            )
        )
    )

function onCreateGameSuccess(action$, createGameSubmitAction) {
    return mergeMap(createGameSuccessAction =>
        action$.pipe(
            ofType(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR),
            take(1),
            onError(UPLOAD_FILE_ERROR, createGameSubmitAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(createGameSubmitAction, createGameSuccessAction),
            startWith(uploadFile({
                slug: `${ createGameSuccessAction.payload.id }.${ createGameSuccessAction.payload.logoExt }`,
                file: createGameSubmitAction.payload.logo
            }))
        )
    );
}

function onUploadFileSuccess(createGameSubmitAction, createGameSuccessAction) {
    return tap(() => createGameSubmitAction.meta.onSuccess(createGameSuccessAction.payload));
}

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}
