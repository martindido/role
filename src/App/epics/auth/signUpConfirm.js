import { SIGN_UP_CONFIRM } from '../../constants/actions';
import { signUpConfirmSuccess, signUpConfirmError } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';

import type { SignUpConfirmAction } from '../../types/Action/Auth';
import type { ActionsObservable, Promise } from 'redux-observable';

export default (action$: ActionsObservable<SignUpConfirmAction>) =>
    action$.pipe(
        ofType(SIGN_UP_CONFIRM),
        switchMap(
            async (action: SignUpConfirmAction): Promise => {
                try {
                    return signUpConfirmSuccess(await signUpConfirm(action.payload));
                } catch (error) {
                    console.log('signUpConfirm', 'error', error);
                    return signUpConfirmError(error);
                }
            }
        )
    );

async function signUpConfirm(confirmation) {
    return await Auth.confirmSignUp(confirmation.username, confirmation.code);
}
