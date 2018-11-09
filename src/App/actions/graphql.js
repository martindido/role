import {
    GET_WORLDS,
    SET_WORLDS,
    CREATE_WORLD,
    GET_WORLD,
    SET_WORLD,
    UNSET_WORLD
} from '../constants/actions';

import type {
    GetWorldsAction,
    SetWorldsAction,
    CreateWorldAction,
    GetWorldAction,
    SetWorldAction,
    UnsetWorldAction
} from '../types/Action';
import type { CreateWorldInput } from '../types/GraphQL';
import type { World } from '../types/World';

export function getWorlds(): GetWorldsAction {
    return {
        type: GET_WORLDS
    };
};

export function setWorlds(worlds: Array<World>): SetWorldsAction {
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

export function getWorld(id: string): GetWorldAction {
    return {
        type: GET_WORLD,
        payload: {
            id
        }
    };
};

export function setWorld(world: World): SetWorldAction {
    return {
        type: SET_WORLD,
        payload: world
    };
};

export function unsetWorld(): UnsetWorldAction {
    return {
        type: UNSET_WORLD
    };
};
