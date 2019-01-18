import { LIST_WORLDS } from '../../constants/actions';
import { setWorlds } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listWorlds as listWorldsQuery } from '../../graphql/queries';

import type { ListWorldsAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

export default (action$: ActionsObservable<ListWorldsAction>) =>
    action$.pipe(
        ofType(LIST_WORLDS),
        switchMap(
            async (): Promise => {
                try {
                    return setWorlds(await listWorlds());
                } catch (error) {
                    console.log('listWorlds', 'error', error);
                    return setWorlds([]);
                }
            }
        )
    );

async function listWorlds() {
    const response = await API.graphql(
        graphqlOperation(listWorldsQuery, {
            limit: 100
        })
    );
    const worlds = response.data.listWorlds.items;

    for (const world of worlds) {
        try {
            world.logoSrc = await Storage.get(`${world.id}.${world.logo.extension}`);
        } catch (error) {
            // NOOP
        }
    }
    return worlds;
}
