import {
    CreateGameInput,
    CreateWorldInput,
    GetGameQueryVariables,
    GetWorldQueryVariables,
    LogoInput,
    UpdateGameInput,
    UpdateWorldInput
} from '../types/GraphQL';

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

export const logoInput: LogoInput = {
    name: NAME,
    size: SIZE,
    type: TYPE,
    extension: EXTENSION
};

export const newLogoInput: LogoInput = {
    name: NEW_NAME,
    size: NEW_SIZE,
    type: NEW_TYPE,
    extension: NEW_EXTENSION
};

export const createWorldInput: CreateWorldInput = {
    name: NAME,
    slug: SLUG,
    logo: logoInput
};

export const createWorldWithIdInput: CreateWorldInput = {
    id: ID,
    ...createWorldInput
};

export const updateWorldInput: UpdateWorldInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG,
    logo: newLogoInput
};

export const updateWorldWithNameInput: UpdateWorldInput = {
    id: ID,
    name: NEW_NAME
};

export const updateWorldWithSlugInput: UpdateWorldInput = {
    id: ID,
    slug: NEW_SLUG
};

export const updateWorldWithLogoInput: UpdateWorldInput = {
    id: ID,
    logo: newLogoInput
};

export const updateWorldWithoutNameInput: UpdateWorldInput = {
    id: ID,
    slug: NEW_SLUG,
    logo: newLogoInput
};

export const updateWorldWithoutSlugInput: UpdateWorldInput = {
    id: ID,
    name: NEW_NAME,
    logo: newLogoInput
};

export const updateWorldWithoutLogoInput: UpdateWorldInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG
};

export const createGameInput: CreateGameInput = {
    name: NAME,
    slug: SLUG,
    logo: logoInput,
    gameWorldId: ID
};

export const createGameWithIdInput: CreateGameInput = {
    id: ID,
    ...createGameInput
};

export const updateGameInput: UpdateGameInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG,
    logo: newLogoInput,
    gameWorldId: NEW_ID
};

export const updateGameWithNameInput: UpdateGameInput = {
    id: ID,
    name: NEW_NAME
};

export const updateGameWithSlugInput: UpdateGameInput = {
    id: ID,
    slug: NEW_SLUG
};

export const updateGameWithLogoInput: UpdateGameInput = {
    id: ID,
    logo: newLogoInput
};

export const updateGameWithWorldInput: UpdateGameInput = {
    id: ID,
    gameWorldId: NEW_ID
};

export const updateGameWithNameAndSlugInput: UpdateGameInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG
};

export const updateGameWithNameAndLogoInput: UpdateGameInput = {
    id: ID,
    name: NEW_NAME,
    logo: newLogoInput
};

export const updateGameWithNameAndWorldInput: UpdateGameInput = {
    id: ID,
    name: NEW_NAME,
    gameWorldId: NEW_ID
};

export const updateGameWithSlugAndLogoInput: UpdateGameInput = {
    id: ID,
    slug: NEW_SLUG,
    logo: newLogoInput
};

export const updateGameWithSlugAndWorldInput: UpdateGameInput = {
    id: ID,
    slug: NEW_SLUG,
    gameWorldId: NEW_ID
};

export const updateGameWithLogoAndWorldInput: UpdateGameInput = {
    id: ID,
    logo: newLogoInput,
    gameWorldId: NEW_ID
};

export const updateGameWithoutNameInput: UpdateGameInput = {
    id: ID,
    slug: NEW_SLUG,
    logo: newLogoInput,
    gameWorldId: NEW_ID
};

export const updateGameWithoutSlugInput: UpdateGameInput = {
    id: ID,
    name: NEW_NAME,
    logo: newLogoInput,
    gameWorldId: NEW_ID
};

export const updateGameWithoutLogoInput: UpdateGameInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG,
    gameWorldId: NEW_ID
};

export const updateGameWithoutWorldInput: UpdateGameInput = {
    id: ID,
    name: NEW_NAME,
    slug: NEW_SLUG,
    logo: newLogoInput
};

export const getWorldQueryVariables: GetWorldQueryVariables = {
    id: ID
};

export const getGameQueryVariables: GetGameQueryVariables = {
    id: ID
};
