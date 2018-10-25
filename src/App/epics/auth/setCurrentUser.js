import { SET_CURRENT_USER } from '../../constants/actions';
import { authenticate } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import Cookies from 'js-cookie';

import type { SetCurrentUserAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

export default (action$: ActionsObservable<SetCurrentUserAction>) =>
    action$.pipe(
        ofType(SET_CURRENT_USER),
        map((action: SetCurrentUserAction) => {
            Cookies.set('role:user', action.payload);
            return authenticate(true);
        })
    );

