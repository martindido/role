// @flow
// this is an auto generated file. This will be overwritten

export const getWorldCustom = `query getWorldCustom($id: ID!) {
  getWorld(id: $id) {
    id
    name
    slug
    logo {
      name
      size
      type
      extension
    }
    games {
      items {
        id
        name
        slug
        logo {
          name
          size
          type
          extension
        }
      }
      nextToken
    }
  }
}
`;
