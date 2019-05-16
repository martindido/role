import { ofType, ActionsObservable } from 'redux-observable';
import { mergeMap, startWith, take, tap } from 'rxjs/operators';

import { createGame } from '../../../actions/graphql';
import { uploadFile } from '../../../actions/storage';
import {
    CREATE_GAME_ERROR,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_SYNC,
    UPLOAD_FILE_ERROR,
    UPLOAD_FILE_SUCCESS
} from '../../../constants/actions';
import { CreateGameErrorAction, CreateGameSuccessAction } from '../../../types/Action/GraphQL';
import { UploadFileAction, UploadFileErrorAction, UploadFileSuccessAction } from '../../../types/Action/Storage';
import { CreateGameSyncAction } from '../../../types/Action/Sync';

type Action$ = ActionsObservable<
    | CreateGameSyncAction
    | CreateGameSuccessAction
    | CreateGameErrorAction
    | UploadFileAction
    | UploadFileSuccessAction
    | UploadFileErrorAction
>;

export default (action$: Action$) =>
    action$.ofType<CreateGameSyncAction>(CREATE_GAME_SYNC).pipe(
        mergeMap((createGameSyncAction) =>
            action$
                .ofType<CreateGameSuccessAction | CreateGameErrorAction>(CREATE_GAME_SUCCESS, CREATE_GAME_ERROR)
                .pipe(
                    take(1),
                    onError(CREATE_GAME_ERROR, createGameSyncAction),
                    ofType(CREATE_GAME_SUCCESS),
                    onCreateGameSuccess(action$, createGameSyncAction),
                    startWith(createGame(createGameSyncAction.payload.game))
                )
        )
    );

function onCreateGameSuccess(action$: Action$, createGameSyncAction: CreateGameSyncAction) {
    return mergeMap((createGameSuccessAction: CreateGameSuccessAction) =>
        action$.ofType<UploadFileSuccessAction | UploadFileErrorAction>(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR).pipe(
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

function onError(type: string, createGameSyncAction: CreateGameSyncAction) {
    return tap(
        (
            resultAction:
                | CreateGameSuccessAction
                | CreateGameErrorAction
                | UploadFileSuccessAction
                | UploadFileErrorAction
        ) => {
            if (resultAction.type === type) {
                createGameSyncAction.meta.onError(resultAction.payload);
            }
        }
    );
}

function onUploadFileSuccess(
    createGameSyncAction: CreateGameSyncAction,
    createGameSuccessAction: CreateGameSuccessAction
) {
    return tap(() => createGameSyncAction.meta.onSuccess(createGameSuccessAction.payload));
}
