import type { CreateWorldInput, CreateGameInput, UpdateGameInput, UpdateWorldInput } from './GraphQL';
import type { File } from './Storage';

export type Error = {} | string;

export type Errors = Array<Error>;

export type CreateWorldSubmit = {
    world: CreateWorldInput,
    logo: File
}

export type CreateGameSubmit = {
    game: CreateGameInput,
    logo: File
}

export type UpdateWorldSubmit = {
    world: UpdateWorldInput,
    logo?: File
}

export type UpdateGameSubmit = {
    game: UpdateGameInput,
    logo?: File
}

export type SubmitMeta = {
    onSuccess: * => *,
    onError: * => *
}
