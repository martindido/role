import {
    SET_WORLDS
} from '../constants/actions';

import type { GraphQLAction } from "../types/Action";
type State = {
    worlds: []
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
        default:
            return state;
    }
};
