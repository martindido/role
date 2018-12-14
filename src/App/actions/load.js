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
import type { GetWorldQueryVariables, GetGameQueryVariables } from '../types/GraphQL';

export function loadWorlds(payload: GetWorldQueryVariables): LoadWorldsAction {
    return {
        type: LOAD_WORLDS,
        payload
    };
};

export function loadWorld(payload: GetWorldQueryVariables): LoadWorldAction {
    return {
        type: LOAD_WORLD,
        payload
    };
};

export function loadGame(payload: GetGameQueryVariables): LoadGameAction {
    return {
        type: LOAD_GAME,
        payload
    };
};
