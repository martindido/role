// @flow
// this is an auto generated file. This will be overwritten

export const onCreateWorld = `subscription OnCreateWorld {
  onCreateWorld {
    id
    name
    slug
    logoExt
    games {
      items {
        id
        name
        slug
        logoExt
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
    slug
    logoExt
    games {
      items {
        id
        name
        slug
        logoExt
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
    slug
    logoExt
    games {
      items {
        id
        name
        slug
        logoExt
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
    slug
    logoExt
    world {
      id
      name
      slug
      logoExt
    }
  }
}
`;
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
    id
    name
    slug
    logoExt
    world {
      id
      name
      slug
      logoExt
    }
  }
}
`;
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
    id
    name
    slug
    logoExt
    world {
      id
      name
      slug
      logoExt
    }
  }
}
`;
