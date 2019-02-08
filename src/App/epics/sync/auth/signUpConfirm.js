import { SIGN_UP_CONFIRM_SYNC, SIGN_UP_CONFIRM_SUCCESS, SIGN_UP_CONFIRM_ERROR } from '../../../constants/actions';
import { signUpConfirm } from '../../../actions/auth';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { SignUpConfirmSyncAction } from '../../../types/Action/Sync';

export default (action$: ActionsObservable<SignUpConfirmSyncAction>) =>
    action$.pipe(
        ofType(SIGN_UP_CONFIRM_SYNC),
        mergeMap(signUpConfirmSyncAction =>
            action$.pipe(
                ofType(SIGN_UP_CONFIRM_SUCCESS, SIGN_UP_CONFIRM_ERROR),
                take(1),
                onError(SIGN_UP_CONFIRM_ERROR, signUpConfirmSyncAction),
                ofType(SIGN_UP_CONFIRM_SUCCESS),
                onSuccess(signUpConfirmSyncAction),
                startWith(
                    signUpConfirm({
                        username: signUpConfirmSyncAction.payload.user.username,
                        code: signUpConfirmSyncAction.payload.confirmation.code
                    })
                )
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

function onSuccess(signUpConfirmSyncAction) {
    return tap(signUpConfirmSuccessAction =>
        signUpConfirmSyncAction.meta.onSuccess(signUpConfirmSuccessAction.payload)
    );
}
