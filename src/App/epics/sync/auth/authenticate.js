import { AUTHENTICATE_SYNC, AUTHENTICATE_SUCCESS, AUTHENTICATE_ERROR } from '../../../constants/actions';
import { authenticate } from '../../../actions/auth';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { AuthenticateSyncAction } from '../../../types/Action';

export default (action$: ActionsObservable<AuthenticateSyncAction>) =>
    action$.pipe(
        ofType(AUTHENTICATE_SYNC),
        mergeMap(authenticateSyncAction =>
            action$.pipe(
                ofType(AUTHENTICATE_SUCCESS, AUTHENTICATE_ERROR),
                take(1),
                onError(AUTHENTICATE_ERROR, authenticateSyncAction),
                ofType(AUTHENTICATE_SUCCESS),
                onSuccess(authenticateSyncAction),
                startWith(authenticate(authenticateSyncAction.payload.authenticator))
            )
        )
    );

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}

function onSuccess(authenticateSyncAction) {
    return tap(authenticateSuccessAction => authenticateSyncAction.meta.onSuccess(authenticateSuccessAction.payload));
}
