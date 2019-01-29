import * as actionCreators from './submit';
import {
    createWorldSubmitAction,
    updateWorldSubmitAction,
    updateWorldWithLogoSubmitAction,
    createGameSubmitAction,
    updateGameSubmitAction,
    updateGameWithLogoSubmitAction
} from '../types/Action.mock';
import {
    createWorldSubmit,
    updateWorldSubmit,
    updateWorldWithLogoSubmit,
    createGameSubmit,
    updateGameSubmit,
    updateGameWithLogoSubmit,
    submitMeta
} from '../types/Submit.mock';

describe('.createWorldSubmit', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.createWorldSubmit(createWorldSubmit, submitMeta)).toEqual(createWorldSubmitAction);
    });
});

describe('.updateWorldSubmit', () => {
    it('returns the corresponding action without Logo', () => {
        expect(actionCreators.updateWorldSubmit(updateWorldSubmit, submitMeta)).toEqual(updateWorldSubmitAction);
    });
    it('returns the corresponding action with Logo', () => {
        expect(actionCreators.updateWorldSubmit(updateWorldWithLogoSubmit, submitMeta)).toEqual(
            updateWorldWithLogoSubmitAction
        );
    });
});

describe('.createGameSubmit', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.createGameSubmit(createGameSubmit, submitMeta)).toEqual(createGameSubmitAction);
    });
});

describe('.updateGameSubmit', () => {
    it('returns the corresponding action without Logo', () => {
        expect(actionCreators.updateGameSubmit(updateGameSubmit, submitMeta)).toEqual(updateGameSubmitAction);
    });
    it('returns the corresponding action with Logo', () => {
        expect(actionCreators.updateGameSubmit(updateGameWithLogoSubmit, submitMeta)).toEqual(
            updateGameWithLogoSubmitAction
        );
    });
});
