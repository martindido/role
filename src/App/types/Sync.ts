import { Authenticator } from './Auth';
import { SignInFormData } from './Form/Auth/SignIn';
import { SignUpFormData } from './Form/Auth/SignUp';
import { SignUpConfirmFormData } from './Form/Auth/SignUpConfirm';
import { CreateGameInput, CreateWorldInput, UpdateGameInput, UpdateWorldInput } from './GraphQL';
import { File } from './Storage';
import { User } from './User';

type AmplifyErrorType = {
    code: string;
    name: string;
    message: string;
};

export type AmplifyError = string | AmplifyErrorType;

export type Errors = Array<AmplifyError | Error>;

export type AuthenticateSync = {
    authenticator?: Authenticator;
};

export type SignInSync = {
    credentials: SignInFormData;
};

export type SignUpSync = {
    credentials: SignUpFormData;
};

export type SignUpConfirmSync = {
    user: User;
    confirmation: SignUpConfirmFormData;
};

export type CreateWorldSync = {
    world: CreateWorldInput;
    logo: File;
};

export type CreateGameSync = {
    game: CreateGameInput;
    logo: File;
};

export type UpdateWorldSync = {
    world: UpdateWorldInput;
    logo?: File;
};

export type UpdateGameSync = {
    game: UpdateGameInput;
    logo?: File;
};

export type SyncMeta = {
    onSuccess(x: any): any;
    onError(x: any): any;
};
