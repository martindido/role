import { SIGN_IN_SYNC, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../../../constants/actions';
import { signIn } from '../../../actions/auth';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { SignInSyncAction } from '../../../types/Action';

export default (action$: ActionsObservable<SignInSyncAction>) =>
    action$.pipe(
        ofType(SIGN_IN_SYNC),
        mergeMap(signInSyncAction =>
            action$.pipe(
                ofType(SIGN_IN_SUCCESS, SIGN_IN_ERROR),
                take(1),
                onError(SIGN_IN_ERROR, signInSyncAction),
                ofType(SIGN_IN_SUCCESS),
                onSuccess(signInSyncAction),
                startWith(signIn(signInSyncAction.payload.credentials))
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

function onSuccess(signInSyncAction) {
    return tap(signInSuccessAction => signInSyncAction.meta.onSuccess(signInSuccessAction.payload));
}
