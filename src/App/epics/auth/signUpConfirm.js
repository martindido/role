import { SIGN_UP_CONFIRM } from '../../constants/actions';
import { signUpSuccess } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';

import type { SignUpConfirmAction } from '../../types/Action';
import type { ActionsObservable, Promise } from 'redux-observable';

export default (action$: ActionsObservable<SignUpConfirmAction>) =>
    action$.pipe(
        ofType(SIGN_UP_CONFIRM),
        switchMap(
            async (action: SignUpConfirmAction): Promise => {
                try {
                    return signUpSuccess(await signUpConfirm(action.payload));
                }
                catch (error) {
                    console.log('signUpConfirm', 'error', error);
                    return signUpSuccess({
                        username: 'error'
                    });
                }
            }
        ),
        ofType(SIGN_UP_CONFIRM),
    );

async function signUpConfirm(confirmation) {
    const data = await Auth.confirmSignUp(confirmation.username, confirmation.code);

    console.log('signUpConfirm', 'data', data);
    return {
        username: 'success'
    };
}

