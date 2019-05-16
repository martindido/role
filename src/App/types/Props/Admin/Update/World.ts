import { LocalizeContextProps } from 'react-localize-redux';
import { RouteComponentProps } from 'react-router-dom';

import { UnsetWorldActionCreator } from '../../../Action/GraphQL';
import { LoadWorldActionCreator } from '../../../Action/Load';
import { UpdateWorldSyncActionCreator } from '../../../Action/Sync';
import { World } from '../../../World';
import { ComputedMatch } from '../../Router';

export type WorldUpdateAdminDispatchProps = Readonly<{
    loadWorld: LoadWorldActionCreator;
    unsetWorld: UnsetWorldActionCreator;
    updateWorldSync: UpdateWorldSyncActionCreator;
}>;

export type WorldUpdateAdminProps = RouteComponentProps &
    LocalizeContextProps &
    WorldUpdateAdminDispatchProps &
    Readonly<{
        world?: World;
        isNotFound: boolean;
        computedMatch: ComputedMatch<{
            worldId: string;
        }>;
    }>;
