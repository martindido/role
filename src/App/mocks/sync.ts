import { CreateGameFormData, UpdateGameFormData } from '../types/Form/Admin/Game';
import { CreateWorldFormData, UpdateWorldFormData } from '../types/Form/Admin/World';
import { SignInFormData } from '../types/Form/Auth/SignIn';
import { SignUpFormData } from '../types/Form/Auth/SignUp';
import { SignUpConfirmFormData } from '../types/Form/Auth/SignUpConfirm';
import { AuthenticateSync } from '../types/Sync';

import { confirmation, credentials } from './auth';
import { authenticator } from './aws-amplify';
import { createGameInput, createWorldInput, updateGameInput, updateWorldInput } from './graphql';
import { file } from './storage';
import { user } from './user';

export const authenticateSync: AuthenticateSync = {};

export const authenticateWithAuthenticatorSync: AuthenticateSync = {
    authenticator
};

export const signInFormData: SignInFormData = {
    credentials
};

export const signUpFormData: SignUpFormData = {
    credentials
};

export const signUpConfirmFormData: SignUpConfirmFormData = {
    user,
    confirmation
};

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
