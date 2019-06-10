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
} from '../../constants/actions';
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
} from '../../types/Action/GraphQL';
import { errors, errorStrings } from '../error';
import { game } from '../game';
import {
    createGameInput,
    createGameWithIdInput,
    createWorldInput,
    createWorldWithIdInput,
    getGameQueryVariables,
    getWorldQueryVariables,
    updateGameInput,
    updateGameWithoutLogoInput,
    updateGameWithoutNameInput,
    updateGameWithoutSlugInput,
    updateGameWithoutWorldInput,
    updateGameWithLogoAndWorldInput,
    updateGameWithLogoInput,
    updateGameWithNameAndLogoInput,
    updateGameWithNameAndSlugInput,
    updateGameWithNameAndWorldInput,
    updateGameWithNameInput,
    updateGameWithSlugAndLogoInput,
    updateGameWithSlugAndWorldInput,
    updateGameWithSlugInput,
    updateGameWithWorldInput,
    updateWorldInput,
    updateWorldWithoutLogoInput,
    updateWorldWithoutNameInput,
    updateWorldWithoutSlugInput,
    updateWorldWithLogoInput,
    updateWorldWithNameInput,
    updateWorldWithSlugInput
} from '../graphql';
import { VALUE } from '../search';
import { world } from '../world';

export const searchAllAction: SearchAllAction = {
    type: SEARCH_ALL,
    payload: VALUE
};

export const listWorldsAction: ListWorldsAction = {
    type: LIST_WORLDS
};

export const listWorldsSuccessAction: ListWorldsSuccessAction = {
    type: LIST_WORLDS_SUCCESS,
    payload: [world]
};

export const listWorldsErrorAction: ListWorldsErrorAction = {
    type: LIST_WORLDS_ERROR,
    payload: errors
};

export const listWorldsErrorStringAction: ListWorldsErrorAction = {
    type: LIST_WORLDS_ERROR,
    payload: errorStrings
};

export const setWorldsAction: SetWorldsAction = {
    type: SET_WORLDS,
    payload: [world]
};

export const createWorldAction: CreateWorldAction = {
    type: CREATE_WORLD,
    payload: createWorldInput
};

export const createWorldWithIdAction: CreateWorldAction = {
    type: CREATE_WORLD,
    payload: createWorldWithIdInput
};

export const createWorldSuccessAction: CreateWorldSuccessAction = {
    type: CREATE_WORLD_SUCCESS,
    payload: world
};

export const createWorldErrorAction: CreateWorldErrorAction = {
    type: CREATE_WORLD_ERROR,
    payload: errors
};

export const createWorldErrorStringAction: CreateWorldErrorAction = {
    type: CREATE_WORLD_ERROR,
    payload: errorStrings
};

export const updateWorldAction: UpdateWorldAction = {
    type: UPDATE_WORLD,
    payload: updateWorldInput
};

export const updateWorldWithNameAction: UpdateWorldAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithNameInput
};

export const updateWorldWithSlugAction: UpdateWorldAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithSlugInput
};

export const updateWorldWithLogoAction: UpdateWorldAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithLogoInput
};

export const updateWorldWithoutNameAction: UpdateWorldAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithoutNameInput
};

export const updateWorldWithoutSlugAction: UpdateWorldAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithoutSlugInput
};

export const updateWorldWithoutLogoAction: UpdateWorldAction = {
    type: UPDATE_WORLD,
    payload: updateWorldWithoutLogoInput
};

export const updateWorldSuccessAction: UpdateWorldSuccessAction = {
    type: UPDATE_WORLD_SUCCESS,
    payload: world
};

export const updateWorldErrorAction: UpdateWorldErrorAction = {
    type: UPDATE_WORLD_ERROR,
    payload: errors
};

export const updateWorldErrorStringAction: UpdateWorldErrorAction = {
    type: UPDATE_WORLD_ERROR,
    payload: errorStrings
};

export const getWorldAction: GetWorldAction = {
    type: GET_WORLD,
    payload: getWorldQueryVariables
};

export const getWorldSuccessAction: GetWorldSuccessAction = {
    type: GET_WORLD_SUCCESS,
    payload: world
};

export const getWorldErrorAction: GetWorldErrorAction = {
    type: GET_WORLD_ERROR,
    payload: errors
};

export const getWorldErrorStringAction: GetWorldErrorAction = {
    type: GET_WORLD_ERROR,
    payload: errorStrings
};

export const setWorldAction: SetWorldAction = {
    type: SET_WORLD,
    payload: world
};

export const unsetWorldAction: UnsetWorldAction = {
    type: UNSET_WORLD
};

export const createGameAction: CreateGameAction = {
    type: CREATE_GAME,
    payload: createGameInput
};

export const createGameWithIdAction: CreateGameAction = {
    type: CREATE_GAME,
    payload: createGameWithIdInput
};

export const createGameSuccessAction: CreateGameSuccessAction = {
    type: CREATE_GAME_SUCCESS,
    payload: game
};

export const createGameErrorAction: CreateGameErrorAction = {
    type: CREATE_GAME_ERROR,
    payload: errors
};

export const createGameErrorStringAction: CreateGameErrorAction = {
    type: CREATE_GAME_ERROR,
    payload: errorStrings
};

export const updateGameAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameInput
};

export const updateGameWithNameAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithNameInput
};

export const updateGameWithSlugAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithSlugInput
};

export const updateGameWithLogoAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithLogoInput
};

export const updateGameWithWorldAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithWorldInput
};

export const updateGameWithNameAndSlugAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithNameAndSlugInput
};

export const updateGameWithNameAndLogoAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithNameAndLogoInput
};

export const updateGameWithNameAndWorldAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithNameAndWorldInput
};

export const updateGameWithSlugAndLogoAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithSlugAndLogoInput
};

export const updateGameWithSlugAndWorldAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithSlugAndWorldInput
};

export const updateGameWithLogoAndWorldAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithLogoAndWorldInput
};

export const updateGameWithoutNameAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithoutNameInput
};

export const updateGameWithoutSlugAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithoutSlugInput
};

export const updateGameWithoutLogoAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithoutLogoInput
};

export const updateGameWithoutWorldAction: UpdateGameAction = {
    type: UPDATE_GAME,
    payload: updateGameWithoutWorldInput
};

export const updateGameSuccessAction: UpdateGameSuccessAction = {
    type: UPDATE_GAME_SUCCESS,
    payload: game
};

export const updateGameErrorAction: UpdateGameErrorAction = {
    type: UPDATE_GAME_ERROR,
    payload: errors
};

export const updateGameErrorStringAction: UpdateGameErrorAction = {
    type: UPDATE_GAME_ERROR,
    payload: errorStrings
};

export const getGameAction: GetGameAction = {
    type: GET_GAME,
    payload: getGameQueryVariables
};

export const getGameSuccessAction: GetGameSuccessAction = {
    type: GET_GAME_SUCCESS,
    payload: game
};

export const getGameErrorAction: GetGameErrorAction = {
    type: GET_GAME_ERROR,
    payload: errors
};

export const getGameErrorStringAction: GetGameErrorAction = {
    type: GET_GAME_ERROR,
    payload: errorStrings
};

export const setGameAction: SetGameAction = {
    type: SET_GAME,
    payload: game
};

export const unsetGameAction: UnsetGameAction = {
    type: UNSET_GAME
};
