import type { World } from './World';
import type { File } from './Storage';

export type Game = {
    id: string,
    name: string,
    slug: string,
    logo: File,
    world: World
};
