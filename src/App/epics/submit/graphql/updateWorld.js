import {
    UPDATE_WORLD_SUBMIT,
    UPDATE_WORLD_SUCCESS,
    UPDATE_WORLD_ERROR,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR
} from '../../../constants/actions';
import { updateWorld } from '../../../actions/graphql';
import { ofType } from 'redux-observable';
import { mergeMap, take, tap, startWith } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { UpdateWorldSubmitAction } from '../../../types/Action';
import { uploadFile } from '../../../actions/storage';

export default (action$: ActionsObservable<UpdateWorldSubmitAction>) =>
    action$.pipe(
        ofType(UPDATE_WORLD_SUBMIT),
        mergeMap(updateWorldSubmitAction =>
            action$.pipe(
                ofType(UPDATE_WORLD_SUCCESS, UPDATE_WORLD_ERROR),
                take(1),
                onError(UPDATE_WORLD_ERROR, updateWorldSubmitAction),
                ofType(UPDATE_WORLD_SUCCESS),
                onUpdateWorldSuccess(action$, updateWorldSubmitAction),
                startWith(updateWorld(updateWorldSubmitAction.payload.world))
            )
        )
    )

function onUpdateWorldSuccess(action$, updateWorldSubmitAction) {
    if (!updateWorldSubmitAction.payload.logo) {
        return onSuccess(updateWorldSubmitAction);
    }
    return mergeMap(updateWorldSuccessAction =>
        action$.pipe(
            ofType(UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR),
            take(1),
            onError(UPLOAD_FILE_ERROR, updateWorldSubmitAction),
            ofType(UPLOAD_FILE_SUCCESS),
            onUploadFileSuccess(updateWorldSubmitAction, updateWorldSuccessAction),
            startWith(uploadFile({
                slug: `${ updateWorldSubmitAction.payload.id }.${ updateWorldSubmitAction.payload.logoExt }`,
                file: updateWorldSubmitAction.payload.logo
            }))
        )
    );
}

function onSuccess(updateWorldSubmitAction) {
    return tap(updateWorldSuccessAction => updateWorldSubmitAction.meta.onSuccess(updateWorldSuccessAction.payload));
}

function onUploadFileSuccess(updateWorldSubmitAction, updateWorldSuccessAction) {
    return tap(() => updateWorldSubmitAction.meta.onSuccess(updateWorldSuccessAction.payload));
}

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}
