import { Game } from '../Game';
import { World } from '../World';

export type GraphQLState = {
    readonly worlds: World[];
    readonly world?: World;
    readonly game?: Game;
};
