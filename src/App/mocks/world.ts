import { World } from '../types/World';

import { game } from './game';
import { file } from './storage';

export const world: World = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    logo: file,
    games: [game]
};
