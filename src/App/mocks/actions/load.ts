import { LOAD_GAME, LOAD_WORLD, LOAD_WORLDS } from '../../constants/actions';
import { LoadGameAction, LoadWorldsAction, LoadWorldAction } from '../../types/Action/Load';
import { game } from '../game';
import { world } from '../world';

export const loadWorldsAction: LoadWorldsAction = {
    type: LOAD_WORLDS
};

export const loadWorldAction: LoadWorldAction = {
    type: LOAD_WORLD,
    payload: world.id
};

export const loadGameAction: LoadGameAction = {
    type: LOAD_GAME,
    payload: game.id
};
