import type {
    CreateWorldInput,
    UpdateWorldInput,
    GetWorldQueryVariables,
    UpdateGameInput,
    CreateGameInput,
    GetGameQueryVariables
} from '../GraphQL';
import type { World } from '../World';
import type { Game } from '../Game';
import type { Errors } from '../Sync';

export type SearchAllAction = {
    type: 'SEARCH_ALL',
    payload: string
};

export type ListWorldsAction = {
    type: 'LIST_WORLDS'
};

export type ListWorldsSuccessAction = {
    type: 'LIST_WORLDS_SUCCESS',
    payload: Array<World>
};

export type ListWorldsErrorAction = {
    type: 'LIST_WORLDS_ERROR',
    payload: Errors
};

export type SetWorldsAction = {
    type: 'SET_WORLDS',
    payload: Array<World>
};

export type CreateWorldAction = {
    type: 'CREATE_WORLD',
    payload: CreateWorldInput
};

export type CreateWorldSuccessAction = {
    type: 'CREATE_WORLD_SUCCESS',
    payload: World
};

export type CreateWorldErrorAction = {
    type: 'CREATE_WORLD_ERROR',
    payload: Errors
};

export type UpdateWorldAction = {
    type: 'UPDATE_WORLD',
    payload: UpdateWorldInput
};

export type UpdateWorldSuccessAction = {
    type: 'UPDATE_WORLD_SUCCESS',
    payload: World
};

export type UpdateWorldErrorAction = {
    type: 'UPDATE_WORLD_ERROR',
    payload: Errors
};

export type GetWorldAction = {
    type: 'GET_WORLD',
    payload: GetWorldQueryVariables
};

export type GetWorldSuccessAction = {
    type: 'GET_WORLD_SUCCESS',
    payload: World
};

export type GetWorldErrorAction = {
    type: 'GET_WORLD_ERROR',
    payload: Errors
};

export type SetWorldAction = {
    type: 'SET_WORLD',
    payload: World
};

export type UnsetWorldAction = {
    type: 'UNSET_WORLD'
};

export type CreateGameAction = {
    type: 'CREATE_GAME',
    payload: CreateGameInput
};

export type CreateGameSuccessAction = {
    type: 'CREATE_GAME_SUCCESS',
    payload: Game
};

export type CreateGameErrorAction = {
    type: 'CREATE_GAME_ERROR',
    payload: Errors
};

export type UpdateGameAction = {
    type: 'UPDATE_GAME',
    payload: UpdateGameInput
};

export type UpdateGameSuccessAction = {
    type: 'UPDATE_GAME_SUCCESS',
    payload: Game
};

export type UpdateGameErrorAction = {
    type: 'UPDATE_GAME_ERROR',
    payload: Errors
};

export type GetGameAction = {
    type: 'GET_GAME',
    payload: GetGameQueryVariables
};

export type GetGameSuccessAction = {
    type: 'GET_GAME_SUCCESS',
    payload: Game
};

export type GetGameErrorAction = {
    type: 'GET_GAME_ERROR',
    payload: Errors
};

export type SetGameAction = {
    type: 'SET_GAME',
    payload: Game
};

export type UnsetGameAction = {
    type: 'UNSET_GAME'
};

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
