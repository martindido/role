// @flow
// this is an auto generated file. This will be overwritten

export const createWorld = `mutation CreateWorld($input: CreateWorldInput!) {
  createWorld(input: $input) {
    id
    name
    path
    games {
      items {
        id
        name
        path
      }
      nextToken
    }
  }
}
`;
export const updateWorld = `mutation UpdateWorld($input: UpdateWorldInput!) {
  updateWorld(input: $input) {
    id
    name
    path
    games {
      items {
        id
        name
        path
      }
      nextToken
    }
  }
}
`;
export const deleteWorld = `mutation DeleteWorld($input: DeleteWorldInput!) {
  deleteWorld(input: $input) {
    id
    name
    path
    games {
      items {
        id
        name
        path
      }
      nextToken
    }
  }
}
`;
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    name
    path
    world {
      id
      name
      path
    }
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    name
    path
    world {
      id
      name
      path
    }
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    name
    path
    world {
      id
      name
      path
    }
  }
}
`;
