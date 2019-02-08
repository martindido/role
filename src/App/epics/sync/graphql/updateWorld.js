import {
    UPDATE_WORLD_SYNC,
    UPDATE_WORLD_SUCCESS,
    UPDATE_WORLD_ERROR,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR
} from '../../../constants/actions';
import { updateWorld } from '../../../actions/graphql';
import { ofType } from 'redux-observable';
import { mergeMap, take, tap, startWith } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { UpdateWorldSyncAction } from '../../../types/Action/Sync';
import { uploadFile } from '../../../actions/storage';

export default (action$: ActionsObservable<UpdateWorldSyncAction>) =>
    action$.pipe(
        ofType(UPDATE_WORLD_SYNC),
        mergeMap(updateWorldSyncAction =>
            action$.pipe(
                ofType(UPDATE_WORLD_SUCCESS, UPDATE_WORLD_ERROR),
                take(1),
                onError(UPDATE_WORLD_ERROR, updateWorldSyncAction),
                ofType(UPDATE_WORLD_SUCCESS),
                onUpdateWorldSuccess(action$, updateWorldSyncAction),
                startWith(updateWorld(updateWorldSyncAction.payload.world))
            )
        )
    );

function onUpdateWorldSuccess(action$, updateWorldSyncAction) {
    if (!updateWorldSyncAction.payload.logo) {
        return onSuccess(updateWorldSyncAction);
    }
    return mergeMap(updateWorldSuccessAction =>
        action$.pipe(
            ofType(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR),
            take(1),
            onError(UPLOAD_FILE_ERROR, updateWorldSyncAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(updateWorldSyncAction, updateWorldSuccessAction),
            startWith(
                uploadFile({
                    slug: `${updateWorldSyncAction.payload.id}.${updateWorldSyncAction.payload.logo.extension}`,
                    file: updateWorldSyncAction.payload.logo
                })
            )
        )
    );
}

function onSuccess(updateWorldSyncAction) {
    return tap(updateWorldSuccessAction => updateWorldSyncAction.meta.onSuccess(updateWorldSuccessAction.payload));
}

function onUploadFileSuccess(updateWorldSyncAction, updateWorldSuccessAction) {
    return tap(() => updateWorldSyncAction.meta.onSuccess(updateWorldSuccessAction.payload));
}

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}
