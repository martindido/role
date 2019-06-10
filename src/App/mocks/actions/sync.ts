import { CREATE_GAME_SYNC, CREATE_WORLD_SYNC, UPDATE_GAME_SYNC, UPDATE_WORLD_SYNC } from '../../constants/actions';
import {
    CreateGameSyncAction,
    CreateWorldSyncAction,
    UpdateGameSyncAction,
    UpdateWorldSyncAction
} from '../../types/Action/Sync';
import {
    createGameFormData,
    createWorldFormData,
    syncMeta,
    updateGameFormData,
    updateGameWithLogoFormData,
    updateWorldFormData,
    updateWorldWithLogoFormData
} from '../sync';

export const createWorldSyncAction: CreateWorldSyncAction = {
    type: CREATE_WORLD_SYNC,
    payload: createWorldFormData,
    meta: syncMeta
};

export const updateWorldSyncAction: UpdateWorldSyncAction = {
    type: UPDATE_WORLD_SYNC,
    payload: updateWorldFormData,
    meta: syncMeta
};

export const updateWorldWithLogoSyncAction: UpdateWorldSyncAction = {
    type: UPDATE_WORLD_SYNC,
    payload: updateWorldWithLogoFormData,
    meta: syncMeta
};

export const createGameSyncAction: CreateGameSyncAction = {
    type: CREATE_GAME_SYNC,
    payload: createGameFormData,
    meta: syncMeta
};

export const updateGameSyncAction: UpdateGameSyncAction = {
    type: UPDATE_GAME_SYNC,
    payload: updateGameFormData,
    meta: syncMeta
};

export const updateGameWithLogoSyncAction: UpdateGameSyncAction = {
    type: UPDATE_GAME_SYNC,
    payload: updateGameWithLogoFormData,
    meta: syncMeta
};
