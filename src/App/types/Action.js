import type { User } from './User';

export type IncrementAction = {
    type: 'INCREMENT_COUNTER',
    payload: number
};

export type DecrementAction = {
    type: 'DECREMENT_COUNTER',
    payload: number
};

export type CompleteUpdateAction = {
    type: 'COMPLETE_UPDATE_COUNTER',
    payload: number
};

export type LoginAction = {
    type: 'LOGIN',
    payload: User
};

export type AuthenticateAction = {
    type: 'AUTHENTICATE',
    payload: boolean
};

export type SetCurrentUserAction = {
    type: 'SET_CURRENT_USER',
    payload: User
};

export type EstablishCurrentUserAction = {
    type: 'ESTABLISH_CURRENT_USER'
};

export type CounterAction =
    | IncrementAction
    | DecrementAction
    | CompleteUpdateAction;

export type AuthAction =
    | LoginAction
    | AuthenticateAction
    | SetCurrentUserAction
    | EstablishCurrentUserAction;

export type Action =
    | CounterAction
    | AuthAction;
