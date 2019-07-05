import { SET_GAME, SET_WORLD, SET_WORLDS, UNSET_GAME, UNSET_WORLD } from '../constants/actions';
import { GraphQLAction } from '../types/Action/GraphQL';
import { GraphQLState } from '../types/State/GraphQL';

export const initialState: GraphQLState = {
    worlds: []
};
export const graphql = (state: GraphQLState = initialState, action: GraphQLAction) => {
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
