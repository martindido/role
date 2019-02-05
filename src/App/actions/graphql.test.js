import * as actionCreators from './graphql';
import {
    searchAllAction,
    listWorldsAction,
    listWorldsSuccessAction,
    listWorldsErrorAction,
    listWorldsErrorStringAction,
    setWorldsAction,
    createWorldAction,
    createWorldWithIdAction,
    createWorldSuccessAction,
    createWorldErrorAction,
    createWorldErrorStringAction,
    updateWorldAction,
    updateWorldWithNameAction,
    updateWorldWithSlugAction,
    updateWorldWithLogoAction,
    updateWorldWithoutNameAction,
    updateWorldWithoutSlugAction,
    updateWorldWithoutLogoAction,
    updateWorldSuccessAction,
    updateWorldErrorAction,
    updateWorldErrorStringAction,
    getWorldAction,
    getWorldSuccessAction,
    getWorldErrorAction,
    getWorldErrorStringAction,
    setWorldAction,
    unsetWorldAction,
    createGameAction,
    createGameWithIdAction,
    createGameSuccessAction,
    createGameErrorAction,
    createGameErrorStringAction,
    updateGameAction,
    updateGameWithNameAction,
    updateGameWithSlugAction,
    updateGameWithLogoAction,
    updateGameWithWorldAction,
    updateGameWithNameAndSlugAction,
    updateGameWithNameAndLogoAction,
    updateGameWithNameAndWorldAction,
    updateGameWithSlugAndLogoAction,
    updateGameWithSlugAndWorldAction,
    updateGameWithLogoAndWorldAction,
    updateGameWithoutNameAction,
    updateGameWithoutSlugAction,
    updateGameWithoutLogoAction,
    updateGameWithoutWorldAction,
    updateGameSuccessAction,
    updateGameErrorAction,
    updateGameErrorStringAction,
    getGameAction,
    getGameSuccessAction,
    getGameErrorAction,
    getGameErrorStringAction,
    setGameAction,
    unsetGameAction
} from '../types/Action.mock';
import {
    createWorldInput,
    createWorldWithIdInput,
    updateWorldInput,
    updateWorldWithNameInput,
    updateWorldWithSlugInput,
    updateWorldWithLogoInput,
    updateWorldWithoutNameInput,
    updateWorldWithoutSlugInput,
    updateWorldWithoutLogoInput,
    createGameInput,
    createGameWithIdInput,
    updateGameInput,
    updateGameWithNameInput,
    updateGameWithSlugInput,
    updateGameWithLogoInput,
    updateGameWithWorldInput,
    updateGameWithNameAndSlugInput,
    updateGameWithNameAndLogoInput,
    updateGameWithNameAndWorldInput,
    updateGameWithSlugAndLogoInput,
    updateGameWithSlugAndWorldInput,
    updateGameWithLogoAndWorldInput,
    updateGameWithoutNameInput,
    updateGameWithoutSlugInput,
    updateGameWithoutLogoInput,
    updateGameWithoutWorldInput
} from '../types/GraphQL.mock';
import { VALUE } from '../types/Search.mock';
import { world } from '../types/World.mock';
import { errors, errorStrings } from '../types/Submit.mock';
import { game } from '../types/Game.mock';

describe('.searchAll', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.searchAll(VALUE)).toEqual(searchAllAction);
    });
});

describe('.listWorlds', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.listWorlds()).toEqual(listWorldsAction);
    });
});

describe('.listWorldsSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.listWorldsSuccess([world])).toEqual(listWorldsSuccessAction);
    });
});

describe('.listWorldsError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.listWorldsError(errors)).toEqual(listWorldsErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.listWorldsError(errorStrings)).toEqual(listWorldsErrorStringAction);
    });
});

describe('.setWorlds', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.setWorlds([world])).toEqual(setWorldsAction);
    });
});

describe('.createWorld', () => {
    it('returns the corresponding action without id', () => {
        expect(actionCreators.createWorld(createWorldInput)).toEqual(createWorldAction);
    });
    it('returns the corresponding action with id', () => {
        expect(actionCreators.createWorld(createWorldWithIdInput)).toEqual(createWorldWithIdAction);
    });
});

describe('.createWorldSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.createWorldSuccess(world)).toEqual(createWorldSuccessAction);
    });
});

describe('.createWorldError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.createWorldError(errors)).toEqual(createWorldErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.createWorldError(errorStrings)).toEqual(createWorldErrorStringAction);
    });
});

describe('.updateWorld', () => {
    it('returns the corresponding action with all attributes', () => {
        expect(actionCreators.updateWorld(updateWorldInput)).toEqual(updateWorldAction);
    });
    it('returns the corresponding action with name', () => {
        expect(actionCreators.updateWorld(updateWorldWithNameInput)).toEqual(updateWorldWithNameAction);
    });
    it('returns the corresponding action with slug', () => {
        expect(actionCreators.updateWorld(updateWorldWithSlugInput)).toEqual(updateWorldWithSlugAction);
    });
    it('returns the corresponding action with logo', () => {
        expect(actionCreators.updateWorld(updateWorldWithLogoInput)).toEqual(updateWorldWithLogoAction);
    });
    it('returns the corresponding action without name', () => {
        expect(actionCreators.updateWorld(updateWorldWithoutNameInput)).toEqual(updateWorldWithoutNameAction);
    });
    it('returns the corresponding action without slug', () => {
        expect(actionCreators.updateWorld(updateWorldWithoutSlugInput)).toEqual(updateWorldWithoutSlugAction);
    });
    it('returns the corresponding action without logo', () => {
        expect(actionCreators.updateWorld(updateWorldWithoutLogoInput)).toEqual(updateWorldWithoutLogoAction);
    });
});

describe('.updateWorldSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.updateWorldSuccess(world)).toEqual(updateWorldSuccessAction);
    });
});

describe('.updateWorldError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.updateWorldError(errors)).toEqual(updateWorldErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.updateWorldError(errorStrings)).toEqual(updateWorldErrorStringAction);
    });
});

describe('.getWorld', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.getWorld(world.id)).toEqual(getWorldAction);
    });
});

describe('.getWorldSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.getWorldSuccess(world)).toEqual(getWorldSuccessAction);
    });
});

describe('.getWorldError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.getWorldError(errors)).toEqual(getWorldErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.getWorldError(errorStrings)).toEqual(getWorldErrorStringAction);
    });
});

describe('.setWorld', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.setWorld(world)).toEqual(setWorldAction);
    });
});

describe('.unsetWorld', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.unsetWorld()).toEqual(unsetWorldAction);
    });
});

describe('.createGame', () => {
    it('returns the corresponding action without id', () => {
        expect(actionCreators.createGame(createGameInput)).toEqual(createGameAction);
    });
    it('returns the corresponding action with id', () => {
        expect(actionCreators.createGame(createGameWithIdInput)).toEqual(createGameWithIdAction);
    });
});

describe('.createGameSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.createGameSuccess(game)).toEqual(createGameSuccessAction);
    });
});

describe('.createGameError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.createGameError(errors)).toEqual(createGameErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.createGameError(errorStrings)).toEqual(createGameErrorStringAction);
    });
});

describe('.updateGame', () => {
    it('returns the corresponding action with all attributes', () => {
        expect(actionCreators.updateGame(updateGameInput)).toEqual(updateGameAction);
    });
    it('returns the corresponding action with name', () => {
        expect(actionCreators.updateGame(updateGameWithNameInput)).toEqual(updateGameWithNameAction);
    });
    it('returns the corresponding action with slug', () => {
        expect(actionCreators.updateGame(updateGameWithSlugInput)).toEqual(updateGameWithSlugAction);
    });
    it('returns the corresponding action with logo', () => {
        expect(actionCreators.updateGame(updateGameWithLogoInput)).toEqual(updateGameWithLogoAction);
    });
    it('returns the corresponding action with world', () => {
        expect(actionCreators.updateGame(updateGameWithWorldInput)).toEqual(updateGameWithWorldAction);
    });
    it('returns the corresponding action with name and slug', () => {
        expect(actionCreators.updateGame(updateGameWithNameAndSlugInput)).toEqual(updateGameWithNameAndSlugAction);
    });
    it('returns the corresponding action with name and logo', () => {
        expect(actionCreators.updateGame(updateGameWithNameAndLogoInput)).toEqual(updateGameWithNameAndLogoAction);
    });
    it('returns the corresponding action with name and world', () => {
        expect(actionCreators.updateGame(updateGameWithNameAndWorldInput)).toEqual(updateGameWithNameAndWorldAction);
    });
    it('returns the corresponding action with slug and logo', () => {
        expect(actionCreators.updateGame(updateGameWithSlugAndLogoInput)).toEqual(updateGameWithSlugAndLogoAction);
    });
    it('returns the corresponding action with slug and world', () => {
        expect(actionCreators.updateGame(updateGameWithSlugAndWorldInput)).toEqual(updateGameWithSlugAndWorldAction);
    });
    it('returns the corresponding action with logo and world', () => {
        expect(actionCreators.updateGame(updateGameWithLogoAndWorldInput)).toEqual(updateGameWithLogoAndWorldAction);
    });
    it('returns the corresponding action without name', () => {
        expect(actionCreators.updateGame(updateGameWithoutNameInput)).toEqual(updateGameWithoutNameAction);
    });
    it('returns the corresponding action without slug', () => {
        expect(actionCreators.updateGame(updateGameWithoutSlugInput)).toEqual(updateGameWithoutSlugAction);
    });
    it('returns the corresponding action without logo', () => {
        expect(actionCreators.updateGame(updateGameWithoutLogoInput)).toEqual(updateGameWithoutLogoAction);
    });
    it('returns the corresponding action without world', () => {
        expect(actionCreators.updateGame(updateGameWithoutWorldInput)).toEqual(updateGameWithoutWorldAction);
    });
});

describe('.updateGameSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.updateGameSuccess(game)).toEqual(updateGameSuccessAction);
    });
});

describe('.updateGameError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.updateGameError(errors)).toEqual(updateGameErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.updateGameError(errorStrings)).toEqual(updateGameErrorStringAction);
    });
});

describe('.getGame', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.getGame(game.id)).toEqual(getGameAction);
    });
});

describe('.getGameSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.getGameSuccess(game)).toEqual(getGameSuccessAction);
    });
});

describe('.getGameError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.getGameError(errors)).toEqual(getGameErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.getGameError(errorStrings)).toEqual(getGameErrorStringAction);
    });
});

describe('.setGame', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.setGame(game)).toEqual(setGameAction);
    });
});

describe('.unsetGame', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.unsetGame()).toEqual(unsetGameAction);
    });
});
