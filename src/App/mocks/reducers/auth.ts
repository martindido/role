import { AuthState } from '../../types/State/Auth';
import { user } from '../user';

export const stateUnauthenticated: AuthState = {
    isAuthenticated: false
};

export const stateAuthenticated: AuthState = {
    isAuthenticated: true
};

export const stateWithCurrentUnconfirmedUser: AuthState = {
    isAuthenticated: false,
    currentUnconfirmedUser: user
};
