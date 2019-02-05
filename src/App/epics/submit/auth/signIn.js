import { SIGN_IN_SUBMIT, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../../../constants/actions';
import { signIn } from '../../../actions/auth';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { SignInSubmitAction } from '../../../types/Action';

export default (action$: ActionsObservable<SignInSubmitAction>) =>
    action$.pipe(
        ofType(SIGN_IN_SUBMIT),
        mergeMap(signInSubmitAction =>
            action$.pipe(
                ofType(SIGN_IN_SUCCESS, SIGN_IN_ERROR),
                take(1),
                onError(SIGN_IN_ERROR, signInSubmitAction),
                ofType(SIGN_IN_SUCCESS),
                onSuccess(signInSubmitAction),
                startWith(signIn(signInSubmitAction.payload.credentials))
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

function onSuccess(signInSubmitAction) {
    return tap(signInSuccessAction => signInSubmitAction.meta.onSuccess(signInSuccessAction.payload));
}
