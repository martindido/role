import { createWorldInput, createGameInput, updateGameInput, updateWorldInput } from './GraphQL.mock';
import { file } from './Storage.mock';

export const error = {};

export const errorString = 'error';

export const errors = [error];

export const errorStrings = [errorString];

export const createWorldSubmit = {
    world: createWorldInput,
    logo: file
};

export const createGameSubmit = {
    game: createGameInput,
    logo: file
};

export const updateWorldSubmit = {
    world: updateWorldInput
};

export const updateWorldWithLogoSubmit = {
    world: updateWorldInput,
    logo: file
};

export const updateGameSubmit = {
    game: updateGameInput
};

export const updateGameWithLogoSubmit = {
    game: updateGameInput,
    logo: file
};

export const submitMeta = {
    onSuccess: () => {},
    onError: () => {}
};
