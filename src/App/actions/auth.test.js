import * as actionCreators from './auth';
import { user } from '../types/User.mock';
import { credentials, credentialsWithEmail, confirmation } from '../types/Auth.mock';
import {
    signInAction,
    signUpAction,
    signUpSuccessAction,
    signUpConfirmAction,
    unsetCurrentUnconfirmedUserAction,
    signOutAction,
    authenticateAction,
    deauthenticateAction,
    setCurrentUserAction,
    unsetCurrentUserAction
} from '../types/Action.mock';

describe('.signIn', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signIn(credentials)).toEqual(signInAction);
    });
});

describe('.signUp', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signUp(credentialsWithEmail)).toEqual(signUpAction);
    });
});

describe('.signUpSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signUpSuccess(user)).toEqual(signUpSuccessAction);
    });
});

describe('.signUpConfirm', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signUpConfirm(confirmation)).toEqual(signUpConfirmAction);
    });
});

describe('.unsetCurrentUnconfirmedUser', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.unsetCurrentUnconfirmedUser()).toEqual(unsetCurrentUnconfirmedUserAction);
    });
});

describe('.signOut', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signOut()).toEqual(signOutAction);
    });
});

describe('.authenticate', () => {
    it('returns the corresponding action when authenticating', () => {
        expect(actionCreators.authenticate(true)).toEqual(authenticateAction);
    });
    it('returns the corresponding action when deauthenticating', () => {
        expect(actionCreators.authenticate(false)).toEqual(deauthenticateAction);
    });
});

describe('.setCurrentUser', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.setCurrentUser(user)).toEqual(setCurrentUserAction);
    });
});

describe('.unsetCurrentUser', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.unsetCurrentUser()).toEqual(unsetCurrentUserAction);
    });
});
