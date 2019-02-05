import {
    SIGN_IN_SUBMIT,
    SIGN_UP_SUBMIT,
    SIGN_UP_CONFIRM_SUBMIT,
    CREATE_WORLD_SUBMIT,
    UPDATE_WORLD_SUBMIT,
    CREATE_GAME_SUBMIT,
    UPDATE_GAME_SUBMIT
} from '../constants/actions';

import type {
    SignInSubmitAction,
    SignUpSubmitAction,
    SignUpConfirmSubmitAction,
    UpdateWorldSubmitAction,
    CreateWorldSubmitAction,
    UpdateGameSubmitAction,
    CreateGameSubmitAction
} from '../types/Action';
import type {
    SubmitMeta,
    SignInSubmit,
    SignUpSubmit,
    SignUpConfirmSubmit,
    CreateWorldSubmit,
    UpdateWorldSubmit,
    CreateGameSubmit,
    UpdateGameSubmit
} from '../types/Submit';

export function signInSubmit(payload: SignInSubmit, meta: SubmitMeta): SignInSubmitAction {
    return {
        type: SIGN_IN_SUBMIT,
        payload,
        meta
    };
}

export function signUpSubmit(payload: SignUpSubmit, meta: SubmitMeta): SignUpSubmitAction {
    return {
        type: SIGN_UP_SUBMIT,
        payload,
        meta
    };
}

export function signUpConfirmSubmit(payload: SignUpConfirmSubmit, meta: SubmitMeta): SignUpConfirmSubmitAction {
    return {
        type: SIGN_UP_CONFIRM_SUBMIT,
        payload,
        meta
    };
}

export function createWorldSubmit(payload: CreateWorldSubmit, meta: SubmitMeta): CreateWorldSubmitAction {
    return {
        type: CREATE_WORLD_SUBMIT,
        payload,
        meta
    };
}

export function updateWorldSubmit(payload: UpdateWorldSubmit, meta: SubmitMeta): UpdateWorldSubmitAction {
    return {
        type: UPDATE_WORLD_SUBMIT,
        payload,
        meta
    };
}

export function createGameSubmit(payload: CreateGameSubmit, meta: SubmitMeta): CreateGameSubmitAction {
    return {
        type: CREATE_GAME_SUBMIT,
        payload,
        meta
    };
}

export function updateGameSubmit(payload: UpdateGameSubmit, meta: SubmitMeta): UpdateGameSubmitAction {
    return {
        type: UPDATE_GAME_SUBMIT,
        payload,
        meta
    };
}
