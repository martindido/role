import { Auth } from 'aws-amplify';

export type Confirmation = {
    username: string;
    code: string;
};

export type Credentials = {
    email?: string;
    username: string;
    password: string;
};

export type Authenticator = typeof Auth;
