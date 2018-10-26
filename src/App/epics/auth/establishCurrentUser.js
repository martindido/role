import { ESTABLISH_CURRENT_USER, SET_CURRENT_USER } from '../../constants/actions';
import { USER } from '../../constants/cookies';
import { setCurrentUser } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import Cookies from 'js-cookie';

import type { ActionsObservable } from 'redux-observable';
import type { EstablishCurrentUserAction } from '../../types/Action';

export default (action$: ActionsObservable<EstablishCurrentUserAction>) =>
    action$.pipe(
        ofType(ESTABLISH_CURRENT_USER),
        map((action: EstablishCurrentUserAction) => {
            const user = Cookies.getJSON(USER);

            if (user) {
                return setCurrentUser(user);
            }
            return action;
        }),
        ofType(SET_CURRENT_USER)
    );

