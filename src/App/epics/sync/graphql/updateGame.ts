import { ofType, ActionsObservable } from 'redux-observable';
import { mergeMap, startWith, take, tap } from 'rxjs/operators';

import { updateGame } from '../../../actions/graphql';
import { uploadFile } from '../../../actions/storage';
import {
    UPDATE_GAME_ERROR,
    UPDATE_GAME_SUCCESS,
    UPDATE_GAME_SYNC,
    UPLOAD_FILE_ERROR,
    UPLOAD_FILE_SUCCESS
} from '../../../constants/actions';
import { UpdateGameErrorAction, UpdateGameSuccessAction } from '../../../types/Action/GraphQL';
import { UploadFileAction, UploadFileErrorAction, UploadFileSuccessAction } from '../../../types/Action/Storage';
import { UpdateGameSyncAction } from '../../../types/Action/Sync';
import { File } from '../../../types/Storage';

type Action$ = ActionsObservable<
    | UpdateGameSyncAction
    | UpdateGameSuccessAction
    | UpdateGameErrorAction
    | UploadFileAction
    | UploadFileSuccessAction
    | UploadFileErrorAction
>;

export default (action$: Action$) =>
    action$.ofType<UpdateGameSyncAction>(UPDATE_GAME_SYNC).pipe(
        mergeMap((updateGameSyncAction) =>
            action$
                .ofType<UpdateGameSuccessAction | UpdateGameErrorAction>(UPDATE_GAME_SUCCESS, UPDATE_GAME_ERROR)
                .pipe(
                    take(1),
                    onError(UPDATE_GAME_ERROR, updateGameSyncAction),
                    ofType(UPDATE_GAME_SUCCESS),
                    onUpdateGameSuccess(action$, updateGameSyncAction),
                    startWith(updateGame(updateGameSyncAction.payload.game))
                )
        )
    );

function onUpdateGameSuccess(action$: Action$, updateGameSyncAction: UpdateGameSyncAction) {
    const logo = updateGameSyncAction.payload.logo as File;

    if (!updateGameSyncAction.payload.logo) {
        return onSuccess(updateGameSyncAction);
    }
    return mergeMap((updateGameSuccessAction: UpdateGameSuccessAction) =>
        action$.ofType<UploadFileSuccessAction | UploadFileErrorAction>(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR).pipe(
            take(1),
            onError(UPLOAD_FILE_ERROR, updateGameSyncAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(updateGameSyncAction, updateGameSuccessAction),
            startWith(
                uploadFile({
                    slug: `${updateGameSyncAction.payload.game.id}.${logo.extension}`,
                    file: logo
                })
            )
        )
    );
}

function onError(type: string, updateGameSyncAction: UpdateGameSyncAction) {
    return tap(
        (
            resultAction:
                | UpdateGameSuccessAction
                | UpdateGameErrorAction
                | UploadFileSuccessAction
                | UploadFileErrorAction
        ) => {
            if (resultAction.type === type) {
                updateGameSyncAction.meta.onError(resultAction.payload);
            }
        }
    );
}

function onSuccess(updateGameSyncAction: UpdateGameSyncAction) {
    return tap((updateGameSuccessAction: UpdateGameSuccessAction) =>
        updateGameSyncAction.meta.onSuccess(updateGameSuccessAction.payload)
    );
}

function onUploadFileSuccess(
    updateGameSyncAction: UpdateGameSyncAction,
    updateGameSuccessAction: UpdateGameSuccessAction
) {
    return tap(() => updateGameSyncAction.meta.onSuccess(updateGameSuccessAction.payload));
}
