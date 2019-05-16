import { LocalizeContextProps } from 'react-localize-redux';
import { RouteComponentProps } from 'react-router-dom';

import { UnsetGameActionCreator } from '../../../Action/GraphQL';
import { LoadWorldActionCreator } from '../../../Action/Load';
import { CreateGameSyncActionCreator } from '../../../Action/Sync';
import { Game } from '../../../Game';
import { ComputedMatch } from '../../Router';

export type GameCreateAdminDispatchProps = Readonly<{
    loadWorld: LoadWorldActionCreator;
    unsetGame: UnsetGameActionCreator;
    createGameSync: CreateGameSyncActionCreator;
}>;

export type GameCreateAdminProps = RouteComponentProps &
    LocalizeContextProps &
    GameCreateAdminDispatchProps &
    Readonly<{
        game?: Game;
        computedMatch: ComputedMatch<{
            worldId: string;
        }>;
    }>;
