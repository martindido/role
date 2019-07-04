import { AuthState } from '../../types/State/Auth';
import { user } from '../user';

export const stateAuthenticated: AuthState = {
    isAuthenticated: true
};

export const stateWithCurrentUnconfirmedUser: AuthState = {
    currentUnconfirmedUser: user
};

export const stateWithCurrentUser: AuthState = {
    isAuthenticated: true,
    currentUser: user
};
