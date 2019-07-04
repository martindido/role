import {
    authenticateSyncAction,
    authenticateWithAuthenticatorSyncAction,
    createGameSyncAction,
    createWorldSyncAction,
    getCurrentLanguageSyncAction,
    signInSyncAction,
    signUpConfirmSyncAction,
    signUpSyncAction,
    updateGameSyncAction,
    updateGameWithLogoSyncAction,
    updateWorldSyncAction,
    updateWorldWithLogoSyncAction
} from '../mocks/actions/sync';
import {
    authenticateSync,
    authenticateWithAuthenticatorSync,
    createGameFormData,
    createWorldFormData,
    signInFormData,
    signUpConfirmFormData,
    signUpFormData,
    syncMeta,
    updateGameFormData,
    updateGameWithLogoFormData,
    updateWorldFormData,
    updateWorldWithLogoFormData
} from '../mocks/sync';

import * as actionCreators from './sync';

describe('.authenticateSync', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.authenticateSync(authenticateSync, syncMeta)).toEqual(authenticateSyncAction);
    });
    it('returns the corresponding action with authenticator', () => {
        expect(actionCreators.authenticateSync(authenticateWithAuthenticatorSync, syncMeta)).toEqual(
            authenticateWithAuthenticatorSyncAction
        );
    });
});

describe('.signInSync', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signInSync(signInFormData, syncMeta)).toEqual(signInSyncAction);
    });
});

describe('.signUpSync', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signUpSync(signUpFormData, syncMeta)).toEqual(signUpSyncAction);
    });
});

describe('.signUpConfirmSync', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.signUpConfirmSync(signUpConfirmFormData, syncMeta)).toEqual(signUpConfirmSyncAction);
    });
});

describe('.createWorldSync', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.createWorldSync(createWorldFormData, syncMeta)).toEqual(createWorldSyncAction);
    });
});

describe('.updateWorldSync', () => {
    it('returns the corresponding action without Logo', () => {
        expect(actionCreators.updateWorldSync(updateWorldFormData, syncMeta)).toEqual(updateWorldSyncAction);
    });
    it('returns the corresponding action with Logo', () => {
        expect(actionCreators.updateWorldSync(updateWorldWithLogoFormData, syncMeta)).toEqual(
            updateWorldWithLogoSyncAction
        );
    });
});

describe('.createGameSync', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.createGameSync(createGameFormData, syncMeta)).toEqual(createGameSyncAction);
    });
});

describe('.updateGameSync', () => {
    it('returns the corresponding action without Logo', () => {
        expect(actionCreators.updateGameSync(updateGameFormData, syncMeta)).toEqual(updateGameSyncAction);
    });
    it('returns the corresponding action with Logo', () => {
        expect(actionCreators.updateGameSync(updateGameWithLogoFormData, syncMeta)).toEqual(
            updateGameWithLogoSyncAction
        );
    });
});

describe('.getCurrentLanguageSync', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.getCurrentLanguageSync(syncMeta)).toEqual(getCurrentLanguageSyncAction);
    });
});
