import { UNSET_CURRENT_USER } from '../../constants/actions';
import { USER } from '../../constants/cookies';
import { authenticate } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import Cookies from 'js-cookie';

import type { UnsetCurrentUserAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

export default (action$: ActionsObservable<UnsetCurrentUserAction>) =>
    action$.pipe(
        ofType(UNSET_CURRENT_USER),
        map(() => {
            Cookies.remove(USER);
            return authenticate(false);
        })
    );

