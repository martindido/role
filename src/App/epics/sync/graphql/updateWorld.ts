import { ofType, ActionsObservable } from 'redux-observable';
import { mergeMap, startWith, take, tap } from 'rxjs/operators';

import { updateWorld } from '../../../actions/graphql';
import { uploadFile } from '../../../actions/storage';
import {
    UPDATE_WORLD_ERROR,
    UPDATE_WORLD_SUCCESS,
    UPDATE_WORLD_SYNC,
    UPLOAD_FILE_ERROR,
    UPLOAD_FILE_SUCCESS
} from '../../../constants/actions';
import { UpdateWorldErrorAction, UpdateWorldSuccessAction } from '../../../types/Action/GraphQL';
import { UploadFileAction, UploadFileErrorAction, UploadFileSuccessAction } from '../../../types/Action/Storage';
import { UpdateWorldSyncAction } from '../../../types/Action/Sync';
import { File } from '../../../types/Storage';

type Action$ = ActionsObservable<
    | UpdateWorldSyncAction
    | UpdateWorldSuccessAction
    | UpdateWorldErrorAction
    | UploadFileAction
    | UploadFileSuccessAction
    | UploadFileErrorAction
>;

export default (action$: Action$) =>
    action$.ofType<UpdateWorldSyncAction>(UPDATE_WORLD_SYNC).pipe(
        mergeMap((updateWorldSyncAction) =>
            action$
                .ofType<UpdateWorldSuccessAction | UpdateWorldErrorAction>(UPDATE_WORLD_SUCCESS, UPDATE_WORLD_ERROR)
                .pipe(
                    take(1),
                    onError(UPDATE_WORLD_ERROR, updateWorldSyncAction),
                    ofType(UPDATE_WORLD_SUCCESS),
                    onUpdateWorldSuccess(action$, updateWorldSyncAction),
                    startWith(updateWorld(updateWorldSyncAction.payload.world))
                )
        )
    );

function onUpdateWorldSuccess(action$: Action$, updateWorldSyncAction: UpdateWorldSyncAction) {
    const logo = updateWorldSyncAction.payload.logo as File;

    if (!updateWorldSyncAction.payload.logo) {
        return onSuccess(updateWorldSyncAction);
    }
    return mergeMap((updateWorldSuccessAction: UpdateWorldSuccessAction) =>
        action$.ofType<UploadFileSuccessAction | UploadFileErrorAction>(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR).pipe(
            take(1),
            onError(UPLOAD_FILE_ERROR, updateWorldSyncAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(updateWorldSyncAction, updateWorldSuccessAction),
            startWith(
                uploadFile({
                    slug: `${updateWorldSyncAction.payload.world.id}.${logo.extension}`,
                    file: logo
                })
            )
        )
    );
}

function onError(type: string, updateWorldSyncAction: UpdateWorldSyncAction) {
    return tap(
        (
            resultAction:
                | UpdateWorldSuccessAction
                | UpdateWorldErrorAction
                | UploadFileSuccessAction
                | UploadFileErrorAction
        ) => {
            if (resultAction.type === type) {
                updateWorldSyncAction.meta.onError(resultAction.payload);
            }
        }
    );
}

function onSuccess(updateWorldSyncAction: UpdateWorldSyncAction) {
    return tap((updateWorldSuccessAction: UpdateWorldSuccessAction) =>
        updateWorldSyncAction.meta.onSuccess(updateWorldSuccessAction.payload)
    );
}

function onUploadFileSuccess(
    updateWorldSyncAction: UpdateWorldSyncAction,
    updateWorldSuccessAction: UpdateWorldSuccessAction
) {
    return tap(() => updateWorldSyncAction.meta.onSuccess(updateWorldSuccessAction.payload));
}
