import {
    createGame,
    createGameError,
    createGameSuccess,
    createWorld,
    createWorldError,
    createWorldSuccess,
    getGame,
    getGameError,
    getGameSuccess,
    getWorld,
    getWorldError,
    getWorldSuccess,
    listWorlds,
    listWorldsError,
    listWorldsSuccess,
    searchAll,
    setGame,
    setWorld,
    unsetGame,
    unsetWorld,
    updateGame,
    updateGameError,
    updateGameSuccess,
    updateWorld,
    updateWorldError,
    updateWorldSuccess
} from '../../actions/graphql';
import { Game } from '../Game';
import {
    CreateGameInput,
    CreateWorldInput,
    GetGameQueryVariables,
    GetWorldQueryVariables,
    UpdateGameInput,
    UpdateWorldInput
} from '../GraphQL';
import { Errors } from '../Sync';
import { World } from '../World';

export type SearchAllAction = {
    type: 'SEARCH_ALL';
    payload: string;
};

export type SearchAllActionCreator = typeof searchAll;

export type ListWorldsAction = {
    type: 'LIST_WORLDS';
};

export type ListWorldsActionCreator = typeof listWorlds;

export type ListWorldsSuccessAction = {
    type: 'LIST_WORLDS_SUCCESS';
    payload: World[];
};

export type ListWorldsSuccessActionCreator = typeof listWorldsSuccess;

export type ListWorldsErrorAction = {
    type: 'LIST_WORLDS_ERROR';
    payload: Errors;
};

export type ListWorldsErrorActionCreator = typeof listWorldsError;

export type SetWorldsAction = {
    type: 'SET_WORLDS';
    payload: World[];
};

export type SetWorldsActionCreator = typeof setWorld;

export type CreateWorldAction = {
    type: 'CREATE_WORLD';
    payload: CreateWorldInput;
};

export type CreateWorldActionCreator = typeof createWorld;

export type CreateWorldSuccessAction = {
    type: 'CREATE_WORLD_SUCCESS';
    payload: World;
};

export type CreateWorldSuccessActionCreator = typeof createWorldSuccess;

export type CreateWorldErrorAction = {
    type: 'CREATE_WORLD_ERROR';
    payload: Errors;
};

export type CreateWorldErrorActionCreator = typeof createWorldError;

export type UpdateWorldAction = {
    type: 'UPDATE_WORLD';
    payload: UpdateWorldInput;
};

export type UpdateWorldActionCreator = typeof updateWorld;

export type UpdateWorldSuccessAction = {
    type: 'UPDATE_WORLD_SUCCESS';
    payload: World;
};

export type UpdateWorldSuccessActionCreator = typeof updateWorldSuccess;

export type UpdateWorldErrorAction = {
    type: 'UPDATE_WORLD_ERROR';
    payload: Errors;
};

export type UpdateWorldErrorActionCreator = typeof updateWorldError;

export type GetWorldAction = {
    type: 'GET_WORLD';
    payload: GetWorldQueryVariables;
};

export type GetWorldActionCreator = typeof getWorld;

export type GetWorldSuccessAction = {
    type: 'GET_WORLD_SUCCESS';
    payload: World;
};

export type GetWorldSuccessActionCreator = typeof getWorldSuccess;

export type GetWorldErrorAction = {
    type: 'GET_WORLD_ERROR';
    payload: Errors;
};

export type GetWorldErrorActionCreator = typeof getWorldError;

export type SetWorldAction = {
    type: 'SET_WORLD';
    payload: World;
};

export type SetWorldActionCreator = typeof setWorld;

export type UnsetWorldAction = {
    type: 'UNSET_WORLD';
};

export type UnsetWorldActionCreator = typeof unsetWorld;

export type CreateGameAction = {
    type: 'CREATE_GAME';
    payload: CreateGameInput;
};

export type CreateGameActionCreator = typeof createGame;

export type CreateGameSuccessAction = {
    type: 'CREATE_GAME_SUCCESS';
    payload: Game;
};

export type CreateGameSuccessActionCreator = typeof createGameSuccess;

export type CreateGameErrorAction = {
    type: 'CREATE_GAME_ERROR';
    payload: Errors;
};

export type CreateGameErrorActionCreator = typeof createGameError;

export type UpdateGameAction = {
    type: 'UPDATE_GAME';
    payload: UpdateGameInput;
};

export type UpdateGameActionCreator = typeof updateGame;

export type UpdateGameSuccessAction = {
    type: 'UPDATE_GAME_SUCCESS';
    payload: Game;
};

export type UpdateGameSuccessActionCreator = typeof updateGameSuccess;

export type UpdateGameErrorAction = {
    type: 'UPDATE_GAME_ERROR';
    payload: Errors;
};

export type UpdateGameErrorActionCreator = typeof updateGameError;

export type GetGameAction = {
    type: 'GET_GAME';
    payload: GetGameQueryVariables;
};

export type GetGameActionCreator = typeof getGame;

export type GetGameSuccessAction = {
    type: 'GET_GAME_SUCCESS';
    payload: Game;
};

export type GetGameSuccessActionCreator = typeof getGameSuccess;

export type GetGameErrorAction = {
    type: 'GET_GAME_ERROR';
    payload: Errors;
};

export type GetGameErrorActionCreator = typeof getGameError;

export type SetGameAction = {
    type: 'SET_GAME';
    payload: Game;
};

export type SetGameActionCreator = typeof setGame;

export type UnsetGameAction = {
    type: 'UNSET_GAME';
};

export type UnsetGameActionCreator = typeof unsetGame;

export type GraphQLAction =
    | SearchAllAction
    | ListWorldsAction
    | ListWorldsSuccessAction
    | ListWorldsErrorAction
    | SetWorldsAction
    | CreateWorldAction
    | CreateWorldSuccessAction
    | CreateWorldErrorAction
    | UpdateWorldAction
    | UpdateWorldSuccessAction
    | UpdateWorldErrorAction
    | GetWorldAction
    | GetWorldSuccessAction
    | GetWorldErrorAction
    | SetWorldAction
    | UnsetWorldAction
    | CreateGameAction
    | CreateGameSuccessAction
    | CreateGameErrorAction
    | UpdateGameAction
    | UpdateGameSuccessAction
    | UpdateGameErrorAction
    | GetGameAction
    | GetGameSuccessAction
    | GetGameErrorAction
    | SetGameAction
    | UnsetGameAction;
