import { SIGN_UP, SIGN_IN } from '../../constants/actions';
import { ofType } from 'redux-observable';
import { delay, map } from 'rxjs/operators';

import type { SignUpAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

export default (action$: ActionsObservable<SignUpAction>) =>
    action$.pipe(
        ofType(SIGN_UP),
        delay(5000),
        map((action: SignUpAction) => {
            console.log(action);
            return action;
        }),
        ofType(SIGN_IN)
    );

