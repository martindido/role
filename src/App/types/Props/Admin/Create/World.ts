import { LocalizeContextProps } from 'react-localize-redux';
import { RouteComponentProps } from 'react-router-dom';

import { UnsetWorldActionCreator } from '../../../Action/GraphQL';
import { LoadWorldActionCreator } from '../../../Action/Load';
import { CreateWorldSyncActionCreator } from '../../../Action/Sync';
import { World } from '../../../World';
import { ComputedMatch } from '../../Router';

export type WorldCreateAdminDispatchProps = Readonly<{
    loadWorld: LoadWorldActionCreator;
    unsetWorld: UnsetWorldActionCreator;
    createWorldSync: CreateWorldSyncActionCreator;
}>;

export type WorldCreateAdminProps = RouteComponentProps &
    LocalizeContextProps &
    WorldCreateAdminDispatchProps &
    Readonly<{
        world?: World;
        computedMatch: ComputedMatch<{
            worldId: string;
        }>;
    }>;
