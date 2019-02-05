import { user } from '../types/User.mock';

export const stateUnauthenticated = {
    isAuthenticated: false
};

export const stateAuthenticated = {
    isAuthenticated: true
};

export const stateWithCurrentUnconfirmedUser = {
    isAuthenticated: false,
    currentUnconfirmedUser: user
};
