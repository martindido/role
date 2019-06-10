import { CreateGameFormData, UpdateGameFormData } from '../types/Form/Admin/Game';
import { CreateWorldFormData, UpdateWorldFormData } from '../types/Form/Admin/World';

import { createGameInput, createWorldInput, updateGameInput, updateWorldInput } from './graphql';
import { file } from './storage';

export const createWorldFormData: CreateWorldFormData = {
    world: createWorldInput,
    logo: file
};

export const createGameFormData: CreateGameFormData = {
    game: createGameInput,
    logo: file
};

export const updateWorldFormData: UpdateWorldFormData = {
    world: updateWorldInput
};

export const updateWorldWithLogoFormData: UpdateWorldFormData = {
    world: updateWorldInput,
    logo: file
};

export const updateGameFormData: UpdateGameFormData = {
    game: updateGameInput
};

export const updateGameWithLogoFormData: UpdateGameFormData = {
    game: updateGameInput,
    logo: file
};

export const syncMeta = {
    onSuccess: () => {}, // tslint:disable-line: no-empty
    onError: () => {} // tslint:disable-line: no-empty
};
