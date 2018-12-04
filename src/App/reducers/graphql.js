import {
    SET_WORLDS,
    SET_WORLD,
    UNSET_WORLD
} from '../constants/actions';

import type { GraphQLAction } from '../types/Action';
import type { World } from '../types/World';
type State = {
    worlds: Array<World>,
    world?: World
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
        default:
            return state;
    }
};
