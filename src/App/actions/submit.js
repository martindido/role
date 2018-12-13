import {
    SET_SUBMIT_SUCCESS,
    SET_SUBMIT_ERRORS,
    UNSET_SUBMIT,
    CREATE_WORLD_SUBMIT,
    UPDATE_WORLD_SUBMIT,
    CREATE_GAME_SUBMIT,
    UPDATE_GAME_SUBMIT
} from '../constants/actions';

import type {
    SetSubmitSuccessAction,
    SetSubmitErrorAction,
    UnsetSubmitAction,
    UpdateWorldSubmitAction,
    CreateWorldSubmitAction,
    UpdateGameSubmitAction,
    CreateGameSubmitAction
} from '../types/Action';
import type { Errors, SubmitMeta } from '../types/Submit';
import type { UpdateWorldInput, CreateWorldInput, CreateGameInput, UpdateGameInput } from '../types/GraphQL';

export function setSubmitSuccess(success: {}): SetSubmitSuccessAction {
    return {
        type: SET_SUBMIT_SUCCESS,
        payload: success
    };
}

export function setSubmitError(errors: Errors): SetSubmitErrorAction {
    return {
        type: SET_SUBMIT_ERRORS,
        payload: errors
    };
}

export function unsetSubmit(): UnsetSubmitAction {
    return {
        type: UNSET_SUBMIT
    };
}

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
