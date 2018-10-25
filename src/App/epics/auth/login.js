import { LOGIN } from '../../constants/actions';
import { setCurrentUser } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { delay, map } from 'rxjs/operators';

import type { LoginAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

export default (action$: ActionsObservable<LoginAction>) =>
    action$.pipe(
        ofType(LOGIN),
        delay(5000),
        map((action: LoginAction) => setCurrentUser(action.payload))
    );

