import { SIGN_IN } from '../../constants/actions';
import { setCurrentUser } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { delay, map } from 'rxjs/operators';

import type { SignInAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

export default (action$: ActionsObservable<SignInAction>) =>
    action$.pipe(
        ofType(SIGN_IN),
        delay(5000),
        map((action: SignInAction) => setCurrentUser(action.payload))
    );

