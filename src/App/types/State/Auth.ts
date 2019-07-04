import { User } from '../User';

export type AuthState = {
    readonly isAuthenticated?: boolean;
    readonly currentUser?: User;
    readonly currentUnconfirmedUser?: User;
};
