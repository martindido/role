import { SIGN_OUT } from '../../constants/actions';
import { unsetCurrentUser } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';
import createLogger from '../../utils/logger';

import type { SignOutAction } from '../../types/Action/Auth';
import type { ActionsObservable, Promise } from 'redux-observable';

const logger = createLogger(['epics', 'auth', 'signOut']);

export default (action$: ActionsObservable<SignOutAction>) =>
    action$.pipe(
        ofType(SIGN_OUT),
        switchMap(
            async (action: SignOutAction): Promise => {
                try {
                    await Auth.signOut();
                } catch (error) {
                    logger.error(error);
                }
                return unsetCurrentUser();
            }
        )
    );
