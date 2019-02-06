import * as actionCreators from './sync';
import {
    createWorldSyncAction,
    updateWorldSyncAction,
    updateWorldWithLogoSyncAction,
    createGameSyncAction,
    updateGameSyncAction,
    updateGameWithLogoSyncAction
} from '../types/Action.mock';
import {
    createWorldSync,
    updateWorldSync,
    updateWorldWithLogoSync,
    createGameSync,
    updateGameSync,
    updateGameWithLogoSync,
    syncMeta
} from '../types/Sync.mock';

describe('.createWorldSync', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.createWorldSync(createWorldSync, syncMeta)).toEqual(createWorldSyncAction);
    });
});

describe('.updateWorldSync', () => {
    it('returns the corresponding action without Logo', () => {
        expect(actionCreators.updateWorldSync(updateWorldSync, syncMeta)).toEqual(updateWorldSyncAction);
    });
    it('returns the corresponding action with Logo', () => {
        expect(actionCreators.updateWorldSync(updateWorldWithLogoSync, syncMeta)).toEqual(
            updateWorldWithLogoSyncAction
        );
    });
});

describe('.createGameSync', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.createGameSync(createGameSync, syncMeta)).toEqual(createGameSyncAction);
    });
});

describe('.updateGameSync', () => {
    it('returns the corresponding action without Logo', () => {
        expect(actionCreators.updateGameSync(updateGameSync, syncMeta)).toEqual(updateGameSyncAction);
    });
    it('returns the corresponding action with Logo', () => {
        expect(actionCreators.updateGameSync(updateGameWithLogoSync, syncMeta)).toEqual(updateGameWithLogoSyncAction);
    });
});
