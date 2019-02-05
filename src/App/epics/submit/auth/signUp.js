import { SIGN_UP_SUBMIT, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from '../../../constants/actions';
import { signUp } from '../../../actions/auth';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { SignUpSubmitAction } from '../../../types/Action';

export default (action$: ActionsObservable<SignUpSubmitAction>) =>
    action$.pipe(
        ofType(SIGN_UP_SUBMIT),
        mergeMap(signUpSubmitAction =>
            action$.pipe(
                ofType(SIGN_UP_SUCCESS, SIGN_UP_ERROR),
                take(1),
                onError(SIGN_UP_ERROR, signUpSubmitAction),
                ofType(SIGN_UP_SUCCESS),
                onSuccess(signUpSubmitAction),
                startWith(signUp(signUpSubmitAction.payload.credentials))
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

function onSuccess(signUpSubmitAction) {
    return tap(signUpSuccessAction => signUpSubmitAction.meta.onSuccess(signUpSuccessAction.payload));
}
