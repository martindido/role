import { AUTHENTICATE, AUTHENTICATE_SUCCESS } from '../../constants/actions';
import { authenticateSuccess, authenticateError, setCurrentUser, unsetCurrentUser } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { switchMap, mergeMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';

import type { User } from '../../types/User';
import type { AuthenticateAction } from '../../types/Action/Auth';
import type { ActionsObservable, Promise } from 'redux-observable';

export default (action$: ActionsObservable<AuthenticateAction>) =>
    action$.pipe(
        ofType(AUTHENTICATE),
        switchMap(
            async (action: AuthenticateAction): Promise => {
                try {
                    return authenticateSuccess(await authenticate(action.payload));
                } catch (error) {
                    console.log('authenticate', 'error', error);
                    return authenticateError(error);
                }
            }
        ),
        mergeMap(action => {
            const actions = [action];

            if (action.type === AUTHENTICATE_SUCCESS) {
                actions.unshift(setCurrentUser(action.payload));
            } else {
                actions.unshift(unsetCurrentUser());
            }
            return actions;
        })
    );

async function authenticate(authenticator) {
    const auth = authenticator || Auth;
    const session = await auth.currentSession();
    const token = session.getIdToken().decodePayload();
    const isAdmin = !!token['cognito:groups'] && token['cognito:groups'].includes('admins');
    const user: User = {
        username: token['cognito:username']
    };

    if (isAdmin) {
        user.isAdmin = isAdmin;
    }
    return user;
}
