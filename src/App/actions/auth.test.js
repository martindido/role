import {
    SIGN_IN,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_CONFIRM,
    UNSET_CURRENT_UNCONFIRMED_USER,
    LOGOUT,
    AUTHENTICATE,
    SET_CURRENT_USER,
    UNSET_CURRENT_USER,
    ESTABLISH_CURRENT_USER
} from '../constants/actions';
import * as actionCreators from './auth';

describe('.signIn', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.signIn().type).toEqual(SIGN_IN);
    });
});

describe('.signUp', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.signUp().type).toEqual(SIGN_UP);
    });
});

describe('.signUpSuccess', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.signUpSuccess().type).toEqual(SIGN_UP_SUCCESS);
    });
});

describe('.signUpConfirm', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.signUpConfirm().type).toEqual(SIGN_UP_CONFIRM);
    });
});

describe('.unsetCurrentUnconfirmedUser', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.unsetCurrentUnconfirmedUser().type).toEqual(UNSET_CURRENT_UNCONFIRMED_USER);
    });
});

describe('.signOut', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.signOut().type).toEqual(LOGOUT);
    });
});

describe('.authenticate', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.authenticate().type).toEqual(AUTHENTICATE);
    });
});

describe('.setCurrentUser', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.setCurrentUser().type).toEqual(SET_CURRENT_USER);
    });
});

describe('.unsetCurrentUser', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.unsetCurrentUser().type).toEqual(UNSET_CURRENT_USER);
    });
});

describe('.establishCurrentUser', () => {
    it('returns the corresponding type', () => {
        // $FlowFixMe
        expect(actionCreators.establishCurrentUser().type).toEqual(ESTABLISH_CURRENT_USER);
    });
});
