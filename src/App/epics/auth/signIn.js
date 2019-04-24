import { SIGN_IN } from '../../constants/actions';
import { signInSuccess, signInError } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';
import createLogger from '../../utils/logger';

import type { SignInAction } from '../../types/Action/Auth';
import type { ActionsObservable, Promise } from 'redux-observable';

const logger = createLogger(['epics', 'auth', 'signIn']);

export default (action$: ActionsObservable<SignInAction>) =>
    action$.pipe(
        ofType(SIGN_IN),
        switchMap(
            async (action: SignInAction): Promise => {
                try {
                    return signInSuccess(await signIn(action.payload));
                } catch (error) {
                    logger.error(error);
                    return signInError(error);
                }
            }
        )
    );

async function signIn(credentials) {
    const data = await Auth.signIn(credentials.username, credentials.password);

    return {
        username: data.username
    };
}
