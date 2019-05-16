import { LocalizeContextProps } from 'react-localize-redux';
import { RouteComponentProps } from 'react-router-dom';

import { UnsetGameActionCreator } from '../../../Action/GraphQL';
import { LoadGameActionCreator } from '../../../Action/Load';
import { UpdateGameSyncActionCreator } from '../../../Action/Sync';
import { Game } from '../../../Game';
import { ComputedMatch } from '../../Router';

export type GameUpdateAdminDispatchProps = Readonly<{
    loadGame: LoadGameActionCreator;
    unsetGame: UnsetGameActionCreator;
    updateGameSync: UpdateGameSyncActionCreator;
}>;

export type GameUpdateAdminProps = RouteComponentProps &
    LocalizeContextProps &
    GameUpdateAdminDispatchProps &
    Readonly<{
        game?: Game;
        isNotFound: boolean;
        computedMatch: ComputedMatch<{
            worldId: string;
            gameId: string;
        }>;
    }>;
