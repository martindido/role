import { Authenticator } from './Auth';

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

export type SyncMeta = {
    onSuccess(x: any): any;
    onError(x: any): any;
};
