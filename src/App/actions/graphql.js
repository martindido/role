import {
    GET_WORLDS,
    SET_WORLDS,
    CREATE_WORLD,
    UPDATE_WORLD,
    UPDATE_WORLD_SUCCESS,
    UPDATE_WORLD_ERROR,
    GET_WORLD,
    SET_WORLD,
    UNSET_WORLD,
    SEARCH_ALL
} from '../constants/actions';

import type {
    GetWorldsAction,
    SetWorldsAction,
    CreateWorldAction,
    UpdateWorldAction,
    UpdateWorldSuccessAction,
    UpdateWorldErrorAction,
    GetWorldAction,
    SetWorldAction,
    UnsetWorldAction,
    SearchAllAction
} from '../types/Action';
import type {
    CreateWorldInput,
    UpdateWorldInput
} from '../types/GraphQL';
import type { World } from '../types/World';
import type { Errors } from '../types/Submit';

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

export function updateWorld(world: UpdateWorldInput): UpdateWorldAction {
    return {
        type: UPDATE_WORLD,
        payload: world
    };
};

export function updateWorldSuccess(world: World): UpdateWorldSuccessAction {
    return {
        type: UPDATE_WORLD_SUCCESS,
        payload: world
    };
};

export function updateWorldError(errors: Errors): UpdateWorldErrorAction {
    return {
        type: UPDATE_WORLD_ERROR,
        payload: errors
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

export function searchAll(value: string): SearchAllAction {
    return {
        type: SEARCH_ALL,
        payload: value
    };
};
