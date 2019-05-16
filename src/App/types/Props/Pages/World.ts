import { RouteComponentProps } from 'react-router-dom';

import { LoadWorldActionCreator } from '../../Action/Load';
import { World } from '../../World';
import { ComputedMatch } from '../Router';

export type WorldPageProps = RouteComponentProps &
    Readonly<{
        world?: World;
        loadWorld: LoadWorldActionCreator;
        computedMatch: ComputedMatch<{
            worldId: string;
        }>;
    }>;
