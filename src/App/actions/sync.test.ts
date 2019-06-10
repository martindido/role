import {
    createGameSyncAction,
    createWorldSyncAction,
    updateGameSyncAction,
    updateGameWithLogoSyncAction,
    updateWorldSyncAction,
    updateWorldWithLogoSyncAction
} from '../mocks/actions/sync';
import {
    createGameFormData,
    createWorldFormData,
    syncMeta,
    updateGameFormData,
    updateGameWithLogoFormData,
    updateWorldFormData,
    updateWorldWithLogoFormData
} from '../mocks/sync';

import * as actionCreators from './sync';

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
