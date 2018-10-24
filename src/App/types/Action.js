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

export type Action =
    | IncrementAction
    | DecrementAction
    | CompleteUpdateAction;
