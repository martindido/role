import type { CreateWorldInput, CreateGameInput, UpdateGameInput, UpdateWorldInput } from './GraphQL';
import type { Credentials, Confirmation, Authenticator } from './Auth';
import type { File } from './Storage';
import type { User } from './User';

export type AmplifyError =
    | string
    | {
          code: string,
          name: string,
          message: string
      };

export type Errors = Array<AmplifyError | Error>;

export type AuthenticateSync = {
    authenticator?: Authenticator
};

export type SignInSync = {
    credentials: Credentials
};

export type SignUpSync = {
    credentials: Credentials
};

export type SignUpConfirmSync = {
    user: User,
    confirmation: Confirmation
};

export type CreateWorldSync = {
    world: CreateWorldInput,
    logo: File
};

export type CreateGameSync = {
    game: CreateGameInput,
    logo: File
};

export type UpdateWorldSync = {
    world: UpdateWorldInput,
    logo?: File
};

export type UpdateGameSync = {
    game: UpdateGameInput,
    logo?: File
};

export type SyncMeta = {
    onSuccess: (*) => *,
    onError: (*) => *
};
