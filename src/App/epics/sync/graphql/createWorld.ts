import { ofType, ActionsObservable } from 'redux-observable';
import { mergeMap, startWith, take, tap } from 'rxjs/operators';

import { createWorld } from '../../../actions/graphql';
import { uploadFile } from '../../../actions/storage';
import {
    CREATE_WORLD_ERROR,
    CREATE_WORLD_SUCCESS,
    CREATE_WORLD_SYNC,
    UPLOAD_FILE_ERROR,
    UPLOAD_FILE_SUCCESS
} from '../../../constants/actions';
import { CreateWorldErrorAction, CreateWorldSuccessAction } from '../../../types/Action/GraphQL';
import { UploadFileAction, UploadFileErrorAction, UploadFileSuccessAction } from '../../../types/Action/Storage';
import { CreateWorldSyncAction } from '../../../types/Action/Sync';

type Action$ = ActionsObservable<
    | CreateWorldSyncAction
    | CreateWorldSuccessAction
    | CreateWorldErrorAction
    | UploadFileAction
    | UploadFileSuccessAction
    | UploadFileErrorAction
>;

export default (action$: Action$) =>
    action$.ofType<CreateWorldSyncAction>(CREATE_WORLD_SYNC).pipe(
        mergeMap((createWorldSyncAction) =>
            action$
                .ofType<CreateWorldSuccessAction | CreateWorldErrorAction>(CREATE_WORLD_SUCCESS, CREATE_WORLD_ERROR)
                .pipe(
                    take(1),
                    onError(CREATE_WORLD_ERROR, createWorldSyncAction),
                    ofType(CREATE_WORLD_SUCCESS),
                    onCreateWorldSuccess(action$, createWorldSyncAction),
                    startWith(createWorld(createWorldSyncAction.payload.world))
                )
        )
    );

function onCreateWorldSuccess(action$: Action$, createWorldSyncAction: CreateWorldSyncAction) {
    return mergeMap((createWorldSuccessAction: CreateWorldSuccessAction) =>
        action$.ofType<UploadFileSuccessAction | UploadFileErrorAction>(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR).pipe(
            take(1),
            onError(UPLOAD_FILE_ERROR, createWorldSyncAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(createWorldSyncAction, createWorldSuccessAction),
            startWith(
                uploadFile({
                    slug: `${createWorldSuccessAction.payload.id}.${createWorldSuccessAction.payload.logo.extension}`,
                    file: createWorldSyncAction.payload.logo
                })
            )
        )
    );
}

function onError(type: string, createWorldSyncAction: CreateWorldSyncAction) {
    return tap(
        (
            resultAction:
                | CreateWorldSuccessAction
                | CreateWorldErrorAction
                | UploadFileSuccessAction
                | UploadFileErrorAction
        ) => {
            if (resultAction.type === type) {
                createWorldSyncAction.meta.onError(resultAction.payload);
            }
        }
    );
}

function onUploadFileSuccess(
    createWorldSyncAction: CreateWorldSyncAction,
    createWorldSuccessAction: CreateWorldSuccessAction
) {
    return tap(() => createWorldSyncAction.meta.onSuccess(createWorldSuccessAction.payload));
}
