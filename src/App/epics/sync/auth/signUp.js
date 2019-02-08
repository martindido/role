import { SIGN_UP_SYNC, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from '../../../constants/actions';
import { signUp } from '../../../actions/auth';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { SignUpSyncAction } from '../../../types/Action/Sync';

export default (action$: ActionsObservable<SignUpSyncAction>) =>
    action$.pipe(
        ofType(SIGN_UP_SYNC),
        mergeMap(signUpSyncAction =>
            action$.pipe(
                ofType(SIGN_UP_SUCCESS, SIGN_UP_ERROR),
                take(1),
                onError(SIGN_UP_ERROR, signUpSyncAction),
                ofType(SIGN_UP_SUCCESS),
                onSuccess(signUpSyncAction),
                startWith(signUp(signUpSyncAction.payload.credentials))
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

function onSuccess(signUpSyncAction) {
    return tap(signUpSuccessAction => signUpSyncAction.meta.onSuccess(signUpSuccessAction.payload));
}
