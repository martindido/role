/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWorldInput = {|
  id?: ?string,
  name: string,
  path: string,
|};

export type UpdateWorldInput = {|
  id: string,
  name?: ?string,
  path?: ?string,
|};

export type DeleteWorldInput = {|
  id?: ?string,
|};

export type CreateGameInput = {|
  id?: ?string,
  name: string,
  path: string,
  gameWorldId?: ?string,
|};

export type UpdateGameInput = {|
  id: string,
  name?: ?string,
  path?: ?string,
  gameWorldId?: ?string,
|};

export type DeleteGameInput = {|
  id?: ?string,
|};

export type ModelWorldFilterInput = {|
  id?: ?ModelIDFilterInput,
  name?: ?ModelStringFilterInput,
  path?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelWorldFilterInput >,
  or?: ?Array< ?ModelWorldFilterInput >,
  not?: ?ModelWorldFilterInput,
|};

export type ModelIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelGameFilterInput = {|
  id?: ?ModelIDFilterInput,
  name?: ?ModelStringFilterInput,
  path?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelGameFilterInput >,
  or?: ?Array< ?ModelGameFilterInput >,
  not?: ?ModelGameFilterInput,
|};

export type SearchableWorldFilterInput = {|
  id?: ?SearchableIDFilterInput,
  name?: ?SearchableStringFilterInput,
  path?: ?SearchableStringFilterInput,
  and?: ?Array< ?SearchableWorldFilterInput >,
  or?: ?Array< ?SearchableWorldFilterInput >,
  not?: ?SearchableWorldFilterInput,
|};

export type SearchableIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  match?: ?string,
  matchPhrase?: ?string,
  matchPhrasePrefix?: ?string,
  multiMatch?: ?string,
  exists?: ?boolean,
  wildcard?: ?string,
  regexp?: ?string,
|};

export type SearchableStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  match?: ?string,
  matchPhrase?: ?string,
  matchPhrasePrefix?: ?string,
  multiMatch?: ?string,
  exists?: ?boolean,
  wildcard?: ?string,
  regexp?: ?string,
|};

export type SearchableWorldSortInput = {|
  field?: ?SearchableWorldSortableFields,
  direction?: ?SearchableSortDirection,
|};

export type SearchableWorldSortableFields =
  'id" |
  "name" |
  "path";


export type SearchableSortDirection =
  "asc" |
  "desc";


export type SearchableGameFilterInput = {|
  id?: ?SearchableIDFilterInput,
  name?: ?SearchableStringFilterInput,
  path?: ?SearchableStringFilterInput,
  and?: ?Array< ?SearchableGameFilterInput >,
  or?: ?Array< ?SearchableGameFilterInput >,
  not?: ?SearchableGameFilterInput,
|};

export type SearchableGameSortInput = {|
  field?: ?SearchableGameSortableFields,
  direction?: ?SearchableSortDirection,
|};

export type SearchableGameSortableFields =
  "id" |
  "name" |
  "path";


export type CreateWorldMutationVariables = {|
  input: CreateWorldInput,
|};

export type CreateWorldMutation = {|
  createWorld: ? {|
    __typename: "World",
    id: string,
    name: string,
    path: string,
    games: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        path: string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type UpdateWorldMutationVariables = {|
  input: UpdateWorldInput,
|};

export type UpdateWorldMutation = {|
  updateWorld: ? {|
    __typename: "World",
    id: string,
    name: string,
    path: string,
    games: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        path: string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type DeleteWorldMutationVariables = {|
  input: DeleteWorldInput,
|};

export type DeleteWorldMutation = {|
  deleteWorld: ? {|
    __typename: "World",
    id: string,
    name: string,
    path: string,
    games: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        path: string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type CreateGameMutationVariables = {|
  input: CreateGameInput,
|};

export type CreateGameMutation = {|
  createGame: ? {|
    __typename: "Game",
    id: string,
    name: string,
    path: string,
    world: ? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
    |},
  |},
|};

export type UpdateGameMutationVariables = {|
  input: UpdateGameInput,
|};

export type UpdateGameMutation = {|
  updateGame: ? {|
    __typename: "Game",
    id: string,
    name: string,
    path: string,
    world: ? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
    |},
  |},
|};

export type DeleteGameMutationVariables = {|
  input: DeleteGameInput,
|};

export type DeleteGameMutation = {|
  deleteGame: ? {|
    __typename: "Game",
    id: string,
    name: string,
    path: string,
    world: ? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
    |},
  |},
|};

export type GetWorldQueryVariables = {|
  id: string,
|};

export type GetWorldQuery = {|
  getWorld: ? {|
    __typename: "World",
    id: string,
    name: string,
    path: string,
    games: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        path: string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type ListWorldsQueryVariables = {|
  filter?: ?ModelWorldFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListWorldsQuery = {|
  listWorlds: ? {|
    __typename: "ModelWorldConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
      games: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: string,
          name: string,
          path: string,
        |} >,
        nextToken: ?string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type GetGameQueryVariables = {|
  id: string,
|};

export type GetGameQuery = {|
  getGame: ? {|
    __typename: "Game",
    id: string,
    name: string,
    path: string,
    world: ? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
    |},
  |},
|};

export type ListGamesQueryVariables = {|
  filter?: ?ModelGameFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListGamesQuery = {|
  listGames: ? {|
    __typename: "ModelGameConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
      world: ? {|
        __typename: string,
        id: string,
        name: string,
        path: string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type SearchWorldsQueryVariables = {|
  filter?: ?SearchableWorldFilterInput,
  sort?: ?SearchableWorldSortInput,
  limit?: ?number,
  nextToken?: ?number,
|};

export type SearchWorldsQuery = {|
  searchWorlds: ? {|
    __typename: "SearchableWorldConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
      games: ? {|
        __typename: string,
        items: ? Array<? {|
          __typename: string,
          id: string,
          name: string,
          path: string,
        |} >,
        nextToken: ?string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type SearchGamesQueryVariables = {|
  filter?: ?SearchableGameFilterInput,
  sort?: ?SearchableGameSortInput,
  limit?: ?number,
  nextToken?: ?number,
|};

export type SearchGamesQuery = {|
  searchGames: ? {|
    __typename: "SearchableGameConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
      world: ? {|
        __typename: string,
        id: string,
        name: string,
        path: string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateWorldSubscription = {|
  onCreateWorld: ? {|
    __typename: "World",
    id: string,
    name: string,
    path: string,
    games: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        path: string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnUpdateWorldSubscription = {|
  onUpdateWorld: ? {|
    __typename: "World",
    id: string,
    name: string,
    path: string,
    games: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        path: string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnDeleteWorldSubscription = {|
  onDeleteWorld: ? {|
    __typename: "World",
    id: string,
    name: string,
    path: string,
    games: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        name: string,
        path: string,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnCreateGameSubscription = {|
  onCreateGame: ? {|
    __typename: "Game",
    id: string,
    name: string,
    path: string,
    world: ? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
    |},
  |},
|};

export type OnUpdateGameSubscription = {|
  onUpdateGame: ? {|
    __typename: "Game",
    id: string,
    name: string,
    path: string,
    world: ? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
    |},
  |},
|};

export type OnDeleteGameSubscription = {|
  onDeleteGame: ? {|
    __typename: "Game",
    id: string,
    name: string,
    path: string,
    world: ? {|
      __typename: string,
      id: string,
      name: string,
      path: string,
    |},
  |},
|};
