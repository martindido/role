import {
    CREATE_WORLD_SUBMIT,
    UPDATE_WORLD_SUBMIT,
    CREATE_GAME_SUBMIT,
    UPDATE_GAME_SUBMIT
} from '../constants/actions';

import type {
    UpdateWorldSubmitAction,
    CreateWorldSubmitAction,
    UpdateGameSubmitAction,
    CreateGameSubmitAction
} from '../types/Action';
import type { SubmitMeta } from '../types/Submit';
import type { UpdateWorldInput, CreateWorldInput, CreateGameInput, UpdateGameInput } from '../types/GraphQL';

export function createWorldSubmit(payload: CreateWorldInput, meta: SubmitMeta): CreateWorldSubmitAction {
    return {
        type: CREATE_WORLD_SUBMIT,
        payload,
        meta
    };
}

export function updateWorldSubmit(payload: UpdateWorldInput, meta: SubmitMeta): UpdateWorldSubmitAction {
    return {
        type: UPDATE_WORLD_SUBMIT,
        payload,
        meta
    };
}

export function createGameSubmit(payload: CreateGameInput, meta: SubmitMeta): CreateGameSubmitAction {
    return {
        type: CREATE_GAME_SUBMIT,
        payload,
        meta
    };
}

export function updateGameSubmit(payload: UpdateGameInput, meta: SubmitMeta): UpdateGameSubmitAction {
    return {
        type: UPDATE_GAME_SUBMIT,
        payload,
        meta
    };
}
