import { GraphQLResult } from '@aws-amplify/api/lib/types';

import { Game } from './Game';
import { World } from './World';

export type WorldResult = World & {
    games: {
        items: Game[];
    };
};

export type WorldsResult = {
    items: WorldResult[];
};

export type GamesResult = {
    items: Game[];
};

export type CreateWorldResult = GraphQLResult & {
    data: {
        createWorld: WorldResult;
    };
};

export type GetWorldResult = GraphQLResult & {
    data: {
        getWorld: WorldResult;
    };
};

export type ListWorldsResult = GraphQLResult & {
    data: {
        listWorlds: WorldsResult;
    };
};

export type SearchWorldsResult = GraphQLResult & {
    data: {
        searchWorlds: WorldsResult;
    };
};

export type UpdateWorldResult = GraphQLResult & {
    data: {
        updateWorld: WorldResult;
    };
};

export type CreateGameResult = GraphQLResult & {
    data: {
        createGame: Game;
    };
};

export type GetGameResult = GraphQLResult & {
    data: {
        getGame: Game;
    };
};

export type SearchGamesResult = GraphQLResult & {
    data: {
        searchGames: GamesResult;
    };
};

export type UpdateGameResult = GraphQLResult & {
    data: {
        updateGame: Game;
    };
};
