import { SIGN_UP_CONFIRM_SUBMIT, SIGN_UP_CONFIRM_SUCCESS, SIGN_UP_CONFIRM_ERROR } from '../../../constants/actions';
import { signUpConfirm } from '../../../actions/auth';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { SignUpConfirmSubmitAction } from '../../../types/Action';

export default (action$: ActionsObservable<SignUpConfirmSubmitAction>) =>
    action$.pipe(
        ofType(SIGN_UP_CONFIRM_SUBMIT),
        mergeMap(signUpConfirmSubmitAction =>
            action$.pipe(
                ofType(SIGN_UP_CONFIRM_SUCCESS, SIGN_UP_CONFIRM_ERROR),
                take(1),
                onError(SIGN_UP_CONFIRM_ERROR, signUpConfirmSubmitAction),
                ofType(SIGN_UP_CONFIRM_SUCCESS),
                onSuccess(signUpConfirmSubmitAction),
                startWith(
                    signUpConfirm({
                        username: signUpConfirmSubmitAction.payload.user.username,
                        code: signUpConfirmSubmitAction.payload.confirmation.code
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

function onSuccess(signUpConfirmSubmitAction) {
    return tap(signUpConfirmSuccessAction =>
        signUpConfirmSubmitAction.meta.onSuccess(signUpConfirmSuccessAction.payload)
    );
}
