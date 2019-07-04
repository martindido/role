import {
    authenticateAction,
    authenticateErrorAction,
    authenticateErrorStringAction,
    authenticateSuccessAction,
    authenticateWithAuthenticatorAction,
    setCurrentUnconfirmedUserAction,
    setCurrentUserAction,
    signInAction,
    signInErrorAction,
    signInErrorStringAction,
    signInSuccessAction,
    signOutAction,
    signUpAction,
    signUpConfirmAction,
    signUpConfirmErrorAction,
    signUpConfirmErrorStringAction,
    signUpConfirmSuccessAction,
    signUpErrorAction,
    signUpErrorStringAction,
    signUpSuccessAction,
    unsetCurrentUnconfirmedUserAction,
    unsetCurrentUserAction
} from '../mocks/actions/auth';
import { confirmation, credentials, credentialsWithEmail, RESULT } from '../mocks/auth';
import { authenticator } from '../mocks/aws-amplify';
import { error, errorString } from '../mocks/error';
import { user } from '../mocks/user';

import * as actionCreators from './auth';

describe('.authenticate', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.authenticate()).toEqual(authenticateAction);
    });
    it('returns the corresponding action with an authenticator', () => {
        expect(actionCreators.authenticate(authenticator)).toEqual(authenticateWithAuthenticatorAction);
    });
});

describe('.authenticateSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.authenticateSuccess(user)).toEqual(authenticateSuccessAction);
    });
});

describe('.authenticateError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.authenticateError(error)).toEqual(authenticateErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.authenticateError(errorString)).toEqual(authenticateErrorStringAction);
    });
});

describe('.signIn', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signIn(credentials)).toEqual(signInAction);
    });
});

describe('.signInSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signInSuccess(user)).toEqual(signInSuccessAction);
    });
});

describe('.signInError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.signInError(error)).toEqual(signInErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.signInError(errorString)).toEqual(signInErrorStringAction);
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

describe('.signUpError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.signUpError(error)).toEqual(signUpErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.signUpError(errorString)).toEqual(signUpErrorStringAction);
    });
});

describe('.signUpConfirm', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signUpConfirm(confirmation)).toEqual(signUpConfirmAction);
    });
});

describe('.signUpConfirmSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signUpConfirmSuccess(RESULT)).toEqual(signUpConfirmSuccessAction);
    });
});

describe('.signUpConfirmError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.signUpConfirmError(error)).toEqual(signUpConfirmErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.signUpConfirmError(errorString)).toEqual(signUpConfirmErrorStringAction);
    });
});

describe('.setCurrentUnconfirmedUser', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.setCurrentUnconfirmedUser(user)).toEqual(setCurrentUnconfirmedUserAction);
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
