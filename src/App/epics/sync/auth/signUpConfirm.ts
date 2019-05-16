import { ActionsObservable, ofType } from 'redux-observable';
import { mergeMap, startWith, take, tap } from 'rxjs/operators';

import { signUpConfirm } from '../../../actions/auth';
import { SIGN_UP_CONFIRM_ERROR, SIGN_UP_CONFIRM_SUCCESS, SIGN_UP_CONFIRM_SYNC } from '../../../constants/actions';
import { SignUpConfirmErrorAction, SignUpConfirmSuccessAction } from '../../../types/Action/Auth';
import { SignUpConfirmSyncAction } from '../../../types/Action/Sync';

export default (action$: ActionsObservable<SignUpConfirmSyncAction | SignUpConfirmSuccessAction | SignUpConfirmErrorAction>) =>
    action$
        .ofType<SignUpConfirmSyncAction>(SIGN_UP_CONFIRM_SYNC)
        .pipe(
            mergeMap(signUpConfirmSyncAction =>
                action$
                    .ofType<SignUpConfirmSuccessAction | SignUpConfirmErrorAction>(SIGN_UP_CONFIRM_SUCCESS, SIGN_UP_CONFIRM_ERROR)
                    .pipe(
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

function onError(type: string, signUpConfirmSyncAction: SignUpConfirmSyncAction) {
    return tap((resultAction: SignUpConfirmSuccessAction | SignUpConfirmErrorAction) => {
        if (resultAction.type === type) {
            signUpConfirmSyncAction.meta.onError(resultAction.payload);
        }
    });
}

function onSuccess(signUpConfirmSyncAction: SignUpConfirmSyncAction) {
    return tap((signUpConfirmSuccessAction: SignUpConfirmSuccessAction) =>
        signUpConfirmSyncAction.meta.onSuccess(signUpConfirmSuccessAction.payload)
    );
}
