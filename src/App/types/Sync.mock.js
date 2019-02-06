import { createWorldInput, createGameInput, updateGameInput, updateWorldInput } from './GraphQL.mock';
import { file } from './Storage.mock';

export const error = {};

export const errorString = 'error';

export const errors = [error];

export const errorStrings = [errorString];

export const createWorldSync = {
    world: createWorldInput,
    logo: file
};

export const createGameSync = {
    game: createGameInput,
    logo: file
};

export const updateWorldSync = {
    world: updateWorldInput
};

export const updateWorldWithLogoSync = {
    world: updateWorldInput,
    logo: file
};

export const updateGameSync = {
    game: updateGameInput
};

export const updateGameWithLogoSync = {
    game: updateGameInput,
    logo: file
};

export const syncMeta = {
    onSuccess: () => {},
    onError: () => {}
};
