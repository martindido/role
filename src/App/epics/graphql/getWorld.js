import { GET_WORLD } from '../../constants/actions';
import { setWorld } from '../../actions/graphql';
import { setNotFound } from '../../actions/routing';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { getWorld as getWorldQuery } from '../../graphql/queries';

import type { GetWorldAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';
import type { GetWorldQueryVariables } from '../../types/GraphQL';

export default (action$: ActionsObservable<GetWorldAction>) =>
    action$.pipe(
        ofType(GET_WORLD),
        switchMap(
            async (action: GetWorldAction): Promise => {
                try {
                    const world = await getWorld(action.payload);

                    return world ? setWorld(world) : setNotFound(true);
                }
                catch (error) {
                    return setNotFound(true);
                }
            }
        )
    );

async function getWorld(variables: GetWorldQueryVariables) {
    const response = await API.graphql(graphqlOperation(getWorldQuery, variables));
    const world = response.data.getWorld;

    world.games = world.games.items;
    return world;
}
