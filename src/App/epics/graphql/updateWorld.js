import { UPDATE_WORLD } from '../../constants/actions';
import { updateWorldSuccess, updateWorldError } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { updateWorld as updateWorldMutation } from '../../graphql/mutations';
import createLogger from '../../utils/logger';

import type { ActionsObservable } from 'redux-observable';
import type { UpdateWorldAction } from '../../types/Action/GraphQL';
import type { UpdateWorldInput } from '../../types/GraphQL';

const logger = createLogger(['epics', 'graphql', 'updateWorld']);

export default (action$: ActionsObservable<UpdateWorldAction>) =>
    action$.pipe(
        ofType(UPDATE_WORLD),
        switchMap(
            async (action: UpdateWorldAction): Promise => {
                try {
                    const world = await updateWorld(action.payload);

                    return updateWorldSuccess(world);
                } catch (error) {
                    logger.error(error);
                    return updateWorldError(error.errors ? error.errors : [error]);
                }
            }
        )
    );

async function updateWorld(world: UpdateWorldInput) {
    const response = await API.graphql(
        graphqlOperation(updateWorldMutation, {
            input: world
        })
    );
    const updatedWorld = response.data.updateWorld;

    updatedWorld.games = updatedWorld.games.items;
    return updatedWorld;
}
