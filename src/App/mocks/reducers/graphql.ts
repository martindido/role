import { GraphQLState } from '../../types/State/GraphQL';
import { game } from '../game';
import { world } from '../world';

export const stateWithWorlds: GraphQLState = {
    worlds: [world]
};

export const stateWithWorld: GraphQLState = {
    worlds: [],
    world
};

export const stateWithGame: GraphQLState = {
    worlds: [],
    game
};
