import { CREATE_WORLD } from '../../constants/actions';
import { createWorldSuccess, createWorldError } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { createWorld as createWorldMutation } from '../../graphql/mutations';

import type { ActionsObservable } from 'redux-observable';
import type { CreateWorldAction } from '../../types/Action/GraphQL';
import type { CreateWorldInput } from '../../types/GraphQL';

export default (action$: ActionsObservable<CreateWorldAction>) =>
    action$.pipe(
        ofType(CREATE_WORLD),
        switchMap(
            async (action: CreateWorldAction): Promise => {
                try {
                    const world = await createWorld(action.payload);

                    return createWorldSuccess(world);
                } catch (error) {
                    console.log('createWorld', 'error', error);
                    return createWorldError(error.errors ? error.errors : [error]);
                }
            }
        )
    );

async function createWorld(world: CreateWorldInput) {
    const response = await API.graphql(
        graphqlOperation(createWorldMutation, {
            input: world
        })
    );
    const newWorld = response.data.createWorld;

    newWorld.games = newWorld.games.items;
    return newWorld;
}
