import {
    SET_WORLDS,
    SET_WORLD,
    UNSET_WORLD,
    SET_GAME,
    UNSET_GAME
} from '../constants/actions';

import type { GraphQLAction } from '../types/Action';
import type { World } from '../types/World';
import type { Game } from '../types/Game';

type State = {
    worlds: Array<World>,
    world?: World,
    game?: Game
};

export const initialState = {
    worlds: []
};
export const graphql = (state: State = initialState, action: GraphQLAction) => {
    switch (action.type) {
        case SET_WORLDS:
            return {
                ...state,
                worlds: action.payload
            };
        case SET_WORLD:
            return {
                ...state,
                world: action.payload
            };
        case UNSET_WORLD:
            return {
                ...state,
                world: undefined
            };
        case SET_GAME:
            return {
                ...state,
                game: action.payload
            };
        case UNSET_GAME:
            return {
                ...state,
                game: undefined
            };
        default:
            return state;
    }
};
