import { SIGN_UP } from '../../constants/actions';
import { signUpSuccess } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';

import type { SignUpAction } from '../../types/Action';
import type { ActionsObservable, Promise } from 'redux-observable';

export default (action$: ActionsObservable<SignUpAction>) =>
    action$.pipe(
        ofType(SIGN_UP),
        switchMap(
            async (action: SignUpAction): Promise => {
                try {
                    return signUpSuccess(await signUp(action.payload));
                }
                catch (error) {
                    console.log('signUp', 'error', error);
                    return signUpSuccess({
                        username: `${error.message}`
                    });
                }
            }
        )
    );

async function signUp(user) {
    const data = await Auth.signUp({
        username: user.username,
        password: user.password,
        attributes: {
            email: user.email,
            nickname: user.username
        }
    });

    return {
        username: data.user.username
    };
}

