import {
    LOAD_WORLDS,
    LOAD_WORLD,
    LOAD_GAME
} from '../constants/actions';
import type {
    LoadWorldsAction,
    LoadWorldAction,
    LoadGameAction
} from '../types/Action';
import type { GetWorldQueryVariables } from '../types/GraphQL';

export function loadWorlds(payload: GetWorldQueryVariables): LoadWorldsAction {
    return {
        type: LOAD_WORLDS,
        payload
    };
};

export function loadWorld(id: string): LoadWorldAction {
    return {
        type: LOAD_WORLD,
        payload: id
    };
};

export function loadGame(id: string): LoadGameAction {
    return {
        type: LOAD_GAME,
        payload: id
    };
};
