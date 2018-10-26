import { LOGOUT } from '../../constants/actions';
import { unsetCurrentUser } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import type { LogoutAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

export default (action$: ActionsObservable<LogoutAction>) =>
    action$.pipe(
        ofType(LOGOUT),
        map(() =>  unsetCurrentUser())
    );

