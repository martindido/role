import { SIGN_UP } from '../../constants/actions';
import { signUpSuccess, signUpError } from '../../actions/auth';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';
import createLogger from '../../utils/logger';
import { SignUpAction } from '../../types/Action/Auth';
import { ActionsObservable } from 'redux-observable';
import { Action } from '../../types/Action';
import { Credentials } from '../../types/Auth';
import { CognitoUser } from '../../types/User';

const logger = createLogger(['epics', 'auth', 'signUp']);

export default (action$: ActionsObservable<SignUpAction>) =>
    action$.pipe(
        ofType(SIGN_UP),
        switchMap(
            async (action: SignUpAction): Promise<Action> => {
                try {
                    return signUpSuccess(await signUp(action.payload));
                } catch (error) {
                    logger.error(error);
                    return signUpError(error);
                }
            }
        )
    );

async function signUp(credentials: Credentials) {
    const data = await Auth.signUp({
        username: credentials.username,
        password: credentials.password,
        attributes: {
            email: credentials.email,
            nickname: credentials.username
        }
    });
    const user = data.user as CognitoUser;

    return {
        username: user.username
    };
}
