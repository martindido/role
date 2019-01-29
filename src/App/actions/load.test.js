import * as actionCreators from './load';
import { loadWorldsAction, loadWorldAction, loadGameAction } from '../types/Action.mock';
import { world } from '../types/World.mock';
import { game } from '../types/Game.mock';

describe('.loadWorlds', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.loadWorlds()).toEqual(loadWorldsAction);
    });
});

describe('.loadWorld', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.loadWorld(world.id)).toEqual(loadWorldAction);
    });
});

describe('.loadGame', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.loadGame(game.id)).toEqual(loadGameAction);
    });
});
