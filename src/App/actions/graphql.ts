import {
    CREATE_GAME,
    CREATE_GAME_ERROR,
    CREATE_GAME_SUCCESS,
    CREATE_WORLD,
    CREATE_WORLD_ERROR,
    CREATE_WORLD_SUCCESS,
    GET_GAME,
    GET_GAME_ERROR,
    GET_GAME_SUCCESS,
    GET_WORLD,
    GET_WORLD_ERROR,
    GET_WORLD_SUCCESS,
    LIST_WORLDS,
    LIST_WORLDS_ERROR,
    LIST_WORLDS_SUCCESS,
    SEARCH_ALL,
    SET_GAME,
    SET_WORLD,
    SET_WORLDS,
    UNSET_GAME,
    UNSET_WORLD,
    UPDATE_GAME,
    UPDATE_GAME_ERROR,
    UPDATE_GAME_SUCCESS,
    UPDATE_WORLD,
    UPDATE_WORLD_ERROR,
    UPDATE_WORLD_SUCCESS
} from '../constants/actions';
import {
    CreateGameAction,
    CreateGameErrorAction,
    CreateGameSuccessAction,
    CreateWorldAction,
    CreateWorldErrorAction,
    CreateWorldSuccessAction,
    GetGameAction,
    GetGameErrorAction,
    GetGameSuccessAction,
    GetWorldAction,
    GetWorldErrorAction,
    GetWorldSuccessAction,
    ListWorldsAction,
    ListWorldsErrorAction,
    ListWorldsSuccessAction,
    SearchAllAction,
    SetGameAction,
    SetWorldsAction,
    SetWorldAction,
    UnsetGameAction,
    UnsetWorldAction,
    UpdateGameAction,
    UpdateGameErrorAction,
    UpdateGameSuccessAction,
    UpdateWorldAction,
    UpdateWorldErrorAction,
    UpdateWorldSuccessAction
} from '../types/Action/GraphQL';
import { Game } from '../types/Game';
import { CreateGameInput, CreateWorldInput, UpdateGameInput, UpdateWorldInput } from '../types/GraphQL';
import { Errors } from '../types/Sync';
import { World } from '../types/World';

export function searchAll(value: string): SearchAllAction {
    return {
        type: SEARCH_ALL,
        payload: value
    };
}

export function listWorlds(): ListWorldsAction {
    return {
        type: LIST_WORLDS
    };
}

export function listWorldsSuccess(worlds: World[]): ListWorldsSuccessAction {
    return {
        type: LIST_WORLDS_SUCCESS,
        payload: worlds
    };
}

export function listWorldsError(errors: Errors): ListWorldsErrorAction {
    return {
        type: LIST_WORLDS_ERROR,
        payload: errors
    };
}

export function setWorlds(worlds: World[]): SetWorldsAction {
    return {
        type: SET_WORLDS,
        payload: worlds
    };
}

export function createWorld(world: CreateWorldInput): CreateWorldAction {
    return {
        type: CREATE_WORLD,
        payload: world
    };
}

export function createWorldSuccess(world: World): CreateWorldSuccessAction {
    return {
        type: CREATE_WORLD_SUCCESS,
        payload: world
    };
}

export function createWorldError(errors: Errors): CreateWorldErrorAction {
    return {
        type: CREATE_WORLD_ERROR,
        payload: errors
    };
}

export function updateWorld(world: UpdateWorldInput): UpdateWorldAction {
    return {
        type: UPDATE_WORLD,
        payload: world
    };
}

export function updateWorldSuccess(world: World): UpdateWorldSuccessAction {
    return {
        type: UPDATE_WORLD_SUCCESS,
        payload: world
    };
}

export function updateWorldError(errors: Errors): UpdateWorldErrorAction {
    return {
        type: UPDATE_WORLD_ERROR,
        payload: errors
    };
}

export function getWorld(id: string): GetWorldAction {
    return {
        type: GET_WORLD,
        payload: {
            id
        }
    };
}

export function getWorldSuccess(world: World): GetWorldSuccessAction {
    return {
        type: GET_WORLD_SUCCESS,
        payload: world
    };
}

export function getWorldError(errors: Errors): GetWorldErrorAction {
    return {
        type: GET_WORLD_ERROR,
        payload: errors
    };
}

export function setWorld(world: World): SetWorldAction {
    return {
        type: SET_WORLD,
        payload: world
    };
}

export function unsetWorld(): UnsetWorldAction {
    return {
        type: UNSET_WORLD
    };
}

export function createGame(game: CreateGameInput): CreateGameAction {
    return {
        type: CREATE_GAME,
        payload: game
    };
}

export function createGameSuccess(game: Game): CreateGameSuccessAction {
    return {
        type: CREATE_GAME_SUCCESS,
        payload: game
    };
}

export function createGameError(errors: Errors): CreateGameErrorAction {
    return {
        type: CREATE_GAME_ERROR,
        payload: errors
    };
}

export function updateGame(game: UpdateGameInput): UpdateGameAction {
    return {
        type: UPDATE_GAME,
        payload: game
    };
}

export function updateGameSuccess(game: Game): UpdateGameSuccessAction {
    return {
        type: UPDATE_GAME_SUCCESS,
        payload: game
    };
}

export function updateGameError(errors: Errors): UpdateGameErrorAction {
    return {
        type: UPDATE_GAME_ERROR,
        payload: errors
    };
}

export function getGame(id: string): GetGameAction {
    return {
        type: GET_GAME,
        payload: {
            id
        }
    };
}

export function getGameSuccess(game: Game): GetGameSuccessAction {
    return {
        type: GET_GAME_SUCCESS,
        payload: game
    };
}

export function getGameError(errors: Errors): GetGameErrorAction {
    return {
        type: GET_GAME_ERROR,
        payload: errors
    };
}

export function setGame(game: Game): SetGameAction {
    return {
        type: SET_GAME,
        payload: game
    };
}

export function unsetGame(): UnsetGameAction {
    return {
        type: UNSET_GAME
    };
}
