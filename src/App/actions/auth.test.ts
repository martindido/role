import {
    authenticateAction,
    setCurrentUserAction,
    signInAction,
    signOutAction,
    signUpAction,
    signUpConfirmAction,
    signUpSuccessAction,
    unsetCurrentUnconfirmedUserAction,
    unsetCurrentUserAction
} from '../mocks/actions/auth';
import { confirmation, credentials, credentialsWithEmail } from '../mocks/auth';
import { user } from '../mocks/user';

import * as actionCreators from './auth';

describe('.authenticate', () => {
    it('returns the corresponding action when authenticating', () => {
        expect(actionCreators.authenticate()).toEqual(authenticateAction);
    });
});

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
