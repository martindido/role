import type { Game } from './Game';
import type { File } from './Storage';

export type World = {
    id: string,
    name: string,
    slug: string,
    logo: File,
    games: Array<Game>
};
