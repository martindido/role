import { LOAD_GAME, LOAD_WORLD, LOAD_WORLDS } from '../constants/actions';
import { LoadGameAction, LoadWorldsAction, LoadWorldAction } from '../types/Action/Load';

export function loadWorlds(): LoadWorldsAction {
    return {
        type: LOAD_WORLDS
    };
}

export function loadWorld(id: string): LoadWorldAction {
    return {
        type: LOAD_WORLD,
        payload: id
    };
}

export function loadGame(id: string): LoadGameAction {
    return {
        type: LOAD_GAME,
        payload: id
    };
}
