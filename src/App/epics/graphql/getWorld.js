import { GET_WORLD } from '../../constants/actions';
import { getWorldSuccess, getWorldError } from '../../actions/graphql';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { getWorldCustom } from '../../graphql/custom/queries';

import type { GetWorldAction } from '../../types/Action';
import type { ActionsObservable, Promise as PromiseType } from 'redux-observable';
import type { GetWorldQueryVariables } from '../../types/GraphQL';

export default (action$: ActionsObservable<GetWorldAction>) =>
    action$.pipe(
        ofType(GET_WORLD),
        switchMap(
            async (action: GetWorldAction): PromiseType => {
                try {
                    const world = await getWorld(action.payload);

                    return world ? getWorldSuccess(world) : getWorldError([new Error('Not Found')]);
                } catch (error) {
                    console.log('getWorld', 'error', error);
                    return getWorldError([error]);
                }
            }
        )
    );

async function getWorld(variables: GetWorldQueryVariables) {
    const response = await API.graphql(graphqlOperation(getWorldCustom, variables));
    const world = response.data.getWorld;

    try {
        world.logo.src = await Storage.get(`${world.id}.${world.logo.extension}`);
    } catch (error) {
        // NOOP
    }
    world.games = await Promise.all(
        world.games.items.map(async game => {
            try {
                game.logo.src = await Storage.get(`${game.id}.${game.logo.extension}`);
            } catch (error) {
                // NOOP
            }
            return game;
        })
    );
    return world;
}
