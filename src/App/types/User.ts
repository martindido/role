import { CognitoUser as Cognito } from '@aws-amplify/auth';

export type User = {
    username: string;
    isAdmin?: boolean;
};

export type CognitoUser = Cognito & {
    username: string;
};
