/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateWorldInput = {
  id?: string | null,
  name: string,
  slug: string,
  logo: LogoInput,
};

export type LogoInput = {
  name: string,
  size: number,
  type: string,
  extension: string,
};

export type UpdateWorldInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  logo?: LogoInput | null,
};

export type DeleteWorldInput = {
  id?: string | null,
};

export type CreateGameInput = {
  id?: string | null,
  name: string,
  slug: string,
  logo: LogoInput,
  gameWorldId: string,
};

export type UpdateGameInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  logo?: LogoInput | null,
  gameWorldId?: string | null,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type ModelWorldFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  slug?: ModelStringFilterInput | null,
  and?: Array< ModelWorldFilterInput | null > | null,
  or?: Array< ModelWorldFilterInput | null > | null,
  not?: ModelWorldFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  slug?: ModelStringFilterInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type SearchableWorldFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  slug?: SearchableStringFilterInput | null,
  and?: Array< SearchableWorldFilterInput | null > | null,
  or?: Array< SearchableWorldFilterInput | null > | null,
  not?: SearchableWorldFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableWorldSortInput = {
  field?: SearchableWorldSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableWorldSortableFields {
  id = "id",
  name = "name",
  slug = "slug",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableGameFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  slug?: SearchableStringFilterInput | null,
  and?: Array< SearchableGameFilterInput | null > | null,
  or?: Array< SearchableGameFilterInput | null > | null,
  not?: SearchableGameFilterInput | null,
};

export type SearchableGameSortInput = {
  field?: SearchableGameSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableGameSortableFields {
  id = "id",
  name = "name",
  slug = "slug",
}


export type CreateWorldMutationVariables = {
  input: CreateWorldInput,
};

export type CreateWorldMutation = {
  createWorld:  {
    __typename: "World",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        slug: string,
        logo:  {
          __typename: "Logo",
          name: string,
          size: number,
          type: string,
          extension: string,
        },
        world:  {
          __typename: "World",
          id: string,
          name: string,
          slug: string,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateWorldMutationVariables = {
  input: UpdateWorldInput,
};

export type UpdateWorldMutation = {
  updateWorld:  {
    __typename: "World",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        slug: string,
        logo:  {
          __typename: "Logo",
          name: string,
          size: number,
          type: string,
          extension: string,
        },
        world:  {
          __typename: "World",
          id: string,
          name: string,
          slug: string,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteWorldMutationVariables = {
  input: DeleteWorldInput,
};

export type DeleteWorldMutation = {
  deleteWorld:  {
    __typename: "World",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        slug: string,
        logo:  {
          __typename: "Logo",
          name: string,
          size: number,
          type: string,
          extension: string,
        },
        world:  {
          __typename: "World",
          id: string,
          name: string,
          slug: string,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    world:  {
      __typename: "World",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      games:  {
        __typename: "ModelGameConnection",
        items:  Array< {
          __typename: "Game",
          id: string,
          name: string,
          slug: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    world:  {
      __typename: "World",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      games:  {
        __typename: "ModelGameConnection",
        items:  Array< {
          __typename: "Game",
          id: string,
          name: string,
          slug: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    world:  {
      __typename: "World",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      games:  {
        __typename: "ModelGameConnection",
        items:  Array< {
          __typename: "Game",
          id: string,
          name: string,
          slug: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type GetWorldQueryVariables = {
  id: string,
};

export type GetWorldQuery = {
  getWorld:  {
    __typename: "World",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        slug: string,
        logo:  {
          __typename: "Logo",
          name: string,
          size: number,
          type: string,
          extension: string,
        },
        world:  {
          __typename: "World",
          id: string,
          name: string,
          slug: string,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListWorldsQueryVariables = {
  filter?: ModelWorldFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorldsQuery = {
  listWorlds:  {
    __typename: "ModelWorldConnection",
    items:  Array< {
      __typename: "World",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      games:  {
        __typename: "ModelGameConnection",
        items:  Array< {
          __typename: "Game",
          id: string,
          name: string,
          slug: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    world:  {
      __typename: "World",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      games:  {
        __typename: "ModelGameConnection",
        items:  Array< {
          __typename: "Game",
          id: string,
          name: string,
          slug: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      world:  {
        __typename: "World",
        id: string,
        name: string,
        slug: string,
        logo:  {
          __typename: "Logo",
          name: string,
          size: number,
          type: string,
          extension: string,
        },
        games:  {
          __typename: "ModelGameConnection",
          nextToken: string | null,
        } | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchWorldsQueryVariables = {
  filter?: SearchableWorldFilterInput | null,
  sort?: SearchableWorldSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchWorldsQuery = {
  searchWorlds:  {
    __typename: "SearchableWorldConnection",
    items:  Array< {
      __typename: "World",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      games:  {
        __typename: "ModelGameConnection",
        items:  Array< {
          __typename: "Game",
          id: string,
          name: string,
          slug: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchGamesQueryVariables = {
  filter?: SearchableGameFilterInput | null,
  sort?: SearchableGameSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchGamesQuery = {
  searchGames:  {
    __typename: "SearchableGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      world:  {
        __typename: "World",
        id: string,
        name: string,
        slug: string,
        logo:  {
          __typename: "Logo",
          name: string,
          size: number,
          type: string,
          extension: string,
        },
        games:  {
          __typename: "ModelGameConnection",
          nextToken: string | null,
        } | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateWorldSubscription = {
  onCreateWorld:  {
    __typename: "World",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        slug: string,
        logo:  {
          __typename: "Logo",
          name: string,
          size: number,
          type: string,
          extension: string,
        },
        world:  {
          __typename: "World",
          id: string,
          name: string,
          slug: string,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateWorldSubscription = {
  onUpdateWorld:  {
    __typename: "World",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        slug: string,
        logo:  {
          __typename: "Logo",
          name: string,
          size: number,
          type: string,
          extension: string,
        },
        world:  {
          __typename: "World",
          id: string,
          name: string,
          slug: string,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteWorldSubscription = {
  onDeleteWorld:  {
    __typename: "World",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        slug: string,
        logo:  {
          __typename: "Logo",
          name: string,
          size: number,
          type: string,
          extension: string,
        },
        world:  {
          __typename: "World",
          id: string,
          name: string,
          slug: string,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    world:  {
      __typename: "World",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      games:  {
        __typename: "ModelGameConnection",
        items:  Array< {
          __typename: "Game",
          id: string,
          name: string,
          slug: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    world:  {
      __typename: "World",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      games:  {
        __typename: "ModelGameConnection",
        items:  Array< {
          __typename: "Game",
          id: string,
          name: string,
          slug: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    name: string,
    slug: string,
    logo:  {
      __typename: "Logo",
      name: string,
      size: number,
      type: string,
      extension: string,
    },
    world:  {
      __typename: "World",
      id: string,
      name: string,
      slug: string,
      logo:  {
        __typename: "Logo",
        name: string,
        size: number,
        type: string,
        extension: string,
      },
      games:  {
        __typename: "ModelGameConnection",
        items:  Array< {
          __typename: "Game",
          id: string,
          name: string,
          slug: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};
