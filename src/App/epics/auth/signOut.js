import { SIGN_OUT } from '../../constants/actions';
import { unsetCurrentUser } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import type { SignOutAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

export default (action$: ActionsObservable<SignOutAction>) =>
    action$.pipe(
        ofType(SIGN_OUT),
        map(() => unsetCurrentUser())
    );
