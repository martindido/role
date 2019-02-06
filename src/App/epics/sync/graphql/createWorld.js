import {
    CREATE_WORLD_SYNC,
    CREATE_WORLD_SUCCESS,
    CREATE_WORLD_ERROR,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR
} from '../../../constants/actions';
import { createWorld } from '../../../actions/graphql';
import { uploadFile } from '../../../actions/storage';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { CreateWorldSyncAction } from '../../../types/Action';

export default (action$: ActionsObservable<CreateWorldSyncAction>) =>
    action$.pipe(
        ofType(CREATE_WORLD_SYNC),
        mergeMap(createWorldSyncAction =>
            action$.pipe(
                ofType(CREATE_WORLD_SUCCESS, CREATE_WORLD_ERROR),
                take(1),
                onError(CREATE_WORLD_ERROR, createWorldSyncAction),
                ofType(CREATE_WORLD_SUCCESS),
                onCreateWorldSuccess(action$, createWorldSyncAction),
                startWith(createWorld(createWorldSyncAction.payload.world))
            )
        )
    );

function onCreateWorldSuccess(action$, createWorldSyncAction) {
    return mergeMap(createWorldSuccessAction =>
        action$.pipe(
            ofType(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR),
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

function onUploadFileSuccess(createWorldSyncAction, createWorldSuccessAction) {
    return tap(() => createWorldSyncAction.meta.onSuccess(createWorldSuccessAction.payload));
}

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}
