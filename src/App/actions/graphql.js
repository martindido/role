import {
    SEARCH_ALL,
    GET_WORLDS,
    SET_WORLDS,
    CREATE_WORLD,
    CREATE_WORLD_SUCCESS,
    CREATE_WORLD_ERROR,
    UPDATE_WORLD,
    UPDATE_WORLD_SUCCESS,
    UPDATE_WORLD_ERROR,
    GET_WORLD,
    SET_WORLD,
    UNSET_WORLD,
    CREATE_GAME,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_ERROR,
    UPDATE_GAME,
    UPDATE_GAME_SUCCESS,
    UPDATE_GAME_ERROR,
    GET_GAME,
    SET_GAME,
    UNSET_GAME
} from '../constants/actions';

import type {
    SearchAllAction,
    GetWorldsAction,
    SetWorldsAction,
    CreateWorldAction,
    CreateWorldSuccessAction,
    CreateWorldErrorAction,
    UpdateWorldAction,
    UpdateWorldSuccessAction,
    UpdateWorldErrorAction,
    GetWorldAction,
    SetWorldAction,
    UnsetWorldAction,
    CreateGameAction,
    CreateGameSuccessAction,
    CreateGameErrorAction,
    UpdateGameAction,
    UpdateGameSuccessAction,
    UpdateGameErrorAction,
    GetGameAction,
    SetGameAction,
    UnsetGameAction
} from '../types/Action';
import type {
    CreateWorldInput,
    UpdateWorldInput,
    UpdateGameInput,
    CreateGameInput
} from '../types/GraphQL';
import type { World } from '../types/World';
import type { Errors } from '../types/Submit';
import type { Game } from '../types/Game';


export function searchAll(value: string): SearchAllAction {
    return {
        type: SEARCH_ALL,
        payload: value
    };
};

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

export function createWorldSuccess(world: World): CreateWorldSuccessAction {
    return {
        type: CREATE_WORLD_SUCCESS,
        payload: world
    };
};

export function createWorldError(errors: Errors): CreateWorldErrorAction {
    return {
        type: CREATE_WORLD_ERROR,
        payload: errors
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

export function createGame(game: CreateGameInput): CreateGameAction {
    return {
        type: CREATE_GAME,
        payload: game
    };
};

export function createGameSuccess(game: Game): CreateGameSuccessAction {
    return {
        type: CREATE_GAME_SUCCESS,
        payload: game
    };
};

export function createGameError(errors: Errors): CreateGameErrorAction {
    return {
        type: CREATE_GAME_ERROR,
        payload: errors
    };
};

export function updateGame(game: UpdateGameInput): UpdateGameAction {
    return {
        type: UPDATE_GAME,
        payload: game
    };
};

export function updateGameSuccess(game: Game): UpdateGameSuccessAction {
    return {
        type: UPDATE_GAME_SUCCESS,
        payload: game
    };
};

export function updateGameError(errors: Errors): UpdateGameErrorAction {
    return {
        type: UPDATE_GAME_ERROR,
        payload: errors
    };
};

export function getGame(id: string): GetGameAction {
    return {
        type: GET_GAME,
        payload: {
            id
        }
    };
};

export function setGame(game: Game): SetGameAction {
    return {
        type: SET_GAME,
        payload: game
    };
};

export function unsetGame(): UnsetGameAction {
    return {
        type: UNSET_GAME
    };
};
