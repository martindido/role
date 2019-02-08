export type LoadWorldsAction = {
    type: 'LOAD_WORLDS'
};

export type LoadWorldAction = {
    type: 'LOAD_WORLD',
    payload: string
};

export type LoadGameAction = {
    type: 'LOAD_GAME',
    payload: string
};

export type LoadAction = LoadWorldsAction | LoadWorldAction | LoadGameAction;
