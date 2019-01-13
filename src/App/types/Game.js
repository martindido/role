import type { World } from './World';
// import type { File } from './Storage';

export type Game = {
    id: string,
    name: string,
    slug: boolean,
    // logo: File,
    logoExt: string,
    logoSrc: string,
    world: World
};
