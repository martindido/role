import {
    GET_WORLDS,
    SET_WORLDS,
    CREATE_WORLD
} from '../constants/actions';

import type {
    GetWorldsAction,
    SetWorldsAction,
    CreateWorldAction
} from '../types/Action';
import type { CreateWorldInput } from '../types/GraphQL';

export function getWorlds(): GetWorldsAction {
    return {
        type: GET_WORLDS
    };
};

export function setWorlds(worlds: []): SetWorldsAction {
    return {
        type: SET_WORLDS,
        payload: worlds
    };
};

export function createWorld(world: CreateWorldInput): CreateWorldAction {
    return {
        type: CREATE_WORLD,
        payload: world
    };
};
