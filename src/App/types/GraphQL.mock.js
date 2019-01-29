export const ID = 'id';
export const NAME = 'name';
export const SLUG = 'slug';
export const SIZE = 123456;
export const TYPE = 'type';
export const EXTENSION = 'ext';
export const NEW_ID = 'newid';
export const NEW_NAME = 'new name';
export const NEW_SLUG = 'new-slug';
export const NEW_SIZE = 456789;
export const NEW_TYPE = 'newType';
export const NEW_EXTENSION = 'new';

export const logoInput = {
    name: NAME,
    size: SIZE,
    type: TYPE,
    extension: EXTENSION
};

export const newLogoInput = {
    name: NEW_NAME,
    size: NEW_SIZE,
    type: NEW_TYPE,
    extension: NEW_EXTENSION
};

export const createWorldInput = {
    name: NAME,
    slug: SLUG,
    logo: logoInput
};

export const createWorldWithIdInput = {
    id: ID,
    ...createWorldInput
};

export const updateWorldInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG,
    logo: newLogoInput
};

export const updateWorldWithNameInput = {
    id: ID,
    name: NEW_NAME
};

export const updateWorldWithSlugInput = {
    id: ID,
    slug: NEW_SLUG
};

export const updateWorldWithLogoInput = {
    id: ID,
    logo: newLogoInput
};

export const updateWorldWithoutNameInput = {
    id: ID,
    slug: NEW_SLUG,
    logo: newLogoInput
};

export const updateWorldWithoutSlugInput = {
    id: ID,
    name: NEW_NAME,
    logo: newLogoInput
};

export const updateWorldWithoutLogoInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG
};

export const createGameInput = {
    name: NAME,
    slug: SLUG,
    logo: logoInput,
    gameWorldId: ID
};

export const createGameWithIdInput = {
    id: ID,
    ...createGameInput
};

export const updateGameInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG,
    logo: newLogoInput,
    gameWorldId: NEW_ID
};

export const updateGameWithNameInput = {
    id: ID,
    name: NEW_NAME
};

export const updateGameWithSlugInput = {
    id: ID,
    slug: NEW_SLUG
};

export const updateGameWithLogoInput = {
    id: ID,
    logo: newLogoInput
};

export const updateGameWithWorldInput = {
    id: ID,
    gameWorldId: NEW_ID
};

export const updateGameWithNameAndSlugInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG
};

export const updateGameWithNameAndLogoInput = {
    id: ID,
    name: NEW_NAME,
    logo: newLogoInput
};

export const updateGameWithNameAndWorldInput = {
    id: ID,
    name: NEW_NAME,
    gameWorldId: NEW_ID
};

export const updateGameWithSlugAndLogoInput = {
    id: ID,
    slug: NEW_SLUG,
    logo: newLogoInput
};

export const updateGameWithSlugAndWorldInput = {
    id: ID,
    slug: NEW_SLUG,
    gameWorldId: NEW_ID
};

export const updateGameWithLogoAndWorldInput = {
    id: ID,
    logo: newLogoInput,
    gameWorldId: NEW_ID
};

export const updateGameWithoutNameInput = {
    id: ID,
    slug: NEW_SLUG,
    logo: newLogoInput,
    gameWorldId: NEW_ID
};

export const updateGameWithoutSlugInput = {
    id: ID,
    name: NEW_NAME,
    logo: newLogoInput,
    gameWorldId: NEW_ID
};

export const updateGameWithoutLogoInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG,
    gameWorldId: NEW_ID
};

export const updateGameWithoutWorldInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG,
    logo: newLogoInput
};

export const getWorldQueryVariables = {
    id: ID
};

export const getGameQueryVariables = {
    id: ID
};
