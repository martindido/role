import { Game } from '../types/Game';

import { file } from './storage';
import { world } from './world';

export const game: Game = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    logo: file,
    world
};
