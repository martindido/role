import { SIGN_UP_VALIDATE } from '../../constants/actions';
import { signUpSuccess } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';

import type { SignUpValidateAction } from '../../types/Action';
import type { ActionsObservable, Promise } from 'redux-observable';

export default (action$: ActionsObservable<SignUpValidateAction>) =>
    action$.pipe(
        ofType(SIGN_UP_VALIDATE),
        switchMap(
            async (action: SignUpValidateAction): Promise => {
                try {
                    return signUpSuccess(await signUpValidate(action.payload));
                }
                catch (error) {
                    console.log('signUpValidate', 'error', error);
                    return signUpSuccess({
                        username: 'error'
                    });
                }
            }
        ),
        ofType(SIGN_UP_VALIDATE),
    );

async function signUpValidate(validation) {
    const data = await Auth.confirmSignUp(validation.username, validation.code);

    console.log('signUpValidate', 'data', data);
    return {
        username: 'success'
    };
}

