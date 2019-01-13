import {
    CREATE_WORLD_SUBMIT,
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
import type { CreateWorldSubmitAction } from '../../../types/Action';

export default (action$: ActionsObservable<CreateWorldSubmitAction>) =>
    action$.pipe(
        ofType(CREATE_WORLD_SUBMIT),
        mergeMap(createWorldSubmitAction =>
            action$.pipe(
                ofType(CREATE_WORLD_SUCCESS, CREATE_WORLD_ERROR),
                take(1),
                onError(CREATE_WORLD_ERROR, createWorldSubmitAction),
                ofType(CREATE_WORLD_SUCCESS),
                onCreateWorldSuccess(action$, createWorldSubmitAction),
                startWith(createWorld(createWorldSubmitAction.payload.world))
            )
        )
    )

function onCreateWorldSuccess(action$, createWorldSubmitAction) {
    return mergeMap(createWorldSuccessAction =>
        action$.pipe(
            ofType(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR),
            take(1),
            onError(UPLOAD_FILE_ERROR, createWorldSubmitAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(createWorldSubmitAction, createWorldSuccessAction),
            startWith(uploadFile({
                slug: `${ createWorldSuccessAction.payload.id }.${ createWorldSuccessAction.payload.logoExt }`,
                file: createWorldSubmitAction.payload.logo
            }))
        )
    );
}

function onUploadFileSuccess(createWorldSubmitAction, createWorldSuccessAction) {
    return tap(() => createWorldSubmitAction.meta.onSuccess(createWorldSuccessAction.payload));
}

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}
