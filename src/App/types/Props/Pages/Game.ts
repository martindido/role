import { RouteComponentProps } from 'react-router-dom';

import { LoadGameActionCreator } from '../../Action/Load';
import { Game } from '../../Game';
import { ComputedMatch } from '../Router';

export type GamePageProps = RouteComponentProps &
    Readonly<{
        game?: Game;
        loadGame: LoadGameActionCreator;
        computedMatch: ComputedMatch<{
            worldId: string;
            gameId: string;
        }>;
    }>;
