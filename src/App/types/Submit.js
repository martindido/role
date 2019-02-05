import type { CreateWorldInput, CreateGameInput, UpdateGameInput, UpdateWorldInput } from './GraphQL';
import type { Credentials, Confirmation } from './Auth';
import type { File } from './Storage';
import type { User } from './User';

export type Error = Object | string;

export type Errors = Array<Error>;

export type SignInSubmit = {
    credentials: Credentials
};

export type SignUpSubmit = {
    credentials: Credentials
};

export type SignUpConfirmSubmit = {
    user: User,
    confirmation: Confirmation
};

export type CreateWorldSubmit = {
    world: CreateWorldInput,
    logo: File
};

export type CreateGameSubmit = {
    game: CreateGameInput,
    logo: File
};

export type UpdateWorldSubmit = {
    world: UpdateWorldInput,
    logo?: File
};

export type UpdateGameSubmit = {
    game: UpdateGameInput,
    logo?: File
};

export type SubmitMeta = {
    onSuccess: (*) => *,
    onError: (*) => *
};
