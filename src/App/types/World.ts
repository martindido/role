import { Game } from './Game';
import { File } from './Storage';

export type World = {
    id: string;
    name: string;
    slug: string;
    logo: File;
    games: Game[];
};
