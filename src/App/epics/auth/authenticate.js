import { AUTHENTICATE } from '../../constants/actions';
import { setCurrentUser, unsetCurrentUser } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';

import type { User } from '../../types/User';
import type { AuthenticateAction } from '../../types/Action';
import type { ActionsObservable, Promise } from 'redux-observable';

export default (action$: ActionsObservable<AuthenticateAction>) =>
    action$.pipe(
        ofType(AUTHENTICATE),
        switchMap(
            async (action: AuthenticateAction): Promise => {
                try {
                    return setCurrentUser(await authenticate());
                } catch (error) {
                    console.log('authenticate', 'error', error);
                    return unsetCurrentUser();
                }
            }
        )
    );

async function authenticate() {
    const session = await Auth.currentSession();
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
