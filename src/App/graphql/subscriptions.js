// @flow
// this is an auto generated file. This will be overwritten

export const onCreateWorld = `subscription OnCreateWorld {
  onCreateWorld {
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
export const onUpdateWorld = `subscription OnUpdateWorld {
  onUpdateWorld {
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
export const onDeleteWorld = `subscription OnDeleteWorld {
  onDeleteWorld {
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
export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
