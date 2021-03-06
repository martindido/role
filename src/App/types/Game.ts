import { World } from './World';
import { File } from './Storage';

export type Game = {
    id: string;
    name: string;
    slug: string;
    logo: File;
    world: World;
};
