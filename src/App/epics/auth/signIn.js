import { SIGN_IN } from '../../constants/actions';
import { setCurrentUser } from '../../actions/auth';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import type { SignInAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';
import { Auth } from "aws-amplify";

export default (action$: ActionsObservable<SignInAction>) =>
    action$.pipe(
        ofType(SIGN_IN),
        switchMap(
            async (action: SignInAction): Promise => {
                try {
                    return setCurrentUser(await signIn(action.payload));
                }
                catch (error) {
                    console.log('signIn', 'error', error);
                    return setCurrentUser({
                        username: 'error',
                        isAdmin: false
                    });
                }
            }
        )
    );

async function signIn(user) {
    const data = await Auth.signIn(user.username, user.password);
    const session = await Auth.currentSession();
    const payload = session.getIdToken().decodePayload();

    return {
        username: data.username,
        isAdmin: !!payload['cognito:groups'] && payload['cognito:groups'].includes('admins')
    };
}
