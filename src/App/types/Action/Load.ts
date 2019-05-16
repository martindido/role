import { loadGame, loadWorld, loadWorlds } from '../../actions/load';

export type LoadWorldsAction = {
    type: 'LOAD_WORLDS';
};

export type LoadWorldsActionCreator = typeof loadWorlds;

export type LoadWorldAction = {
    type: 'LOAD_WORLD';
    payload: string;
};

export type LoadWorldActionCreator = typeof loadWorld;

export type LoadGameAction = {
    type: 'LOAD_GAME';
    payload: string;
};

export type LoadGameActionCreator = typeof loadGame;

export type LoadAction = LoadWorldsAction | LoadWorldAction | LoadGameAction;
