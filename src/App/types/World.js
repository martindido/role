import type { Game } from './Game';

export type World = {
    id: string,
    name: string,
    path: boolean,
    games: [Game]
};
