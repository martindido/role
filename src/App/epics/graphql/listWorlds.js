import { LIST_WORLDS } from '../../constants/actions';
import { listWorldsSuccess, listWorldsError } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listWorlds as listWorldsQuery } from '../../graphql/queries';
import createLogger from '../../utils/logger';

import type { ActionsObservable } from 'redux-observable';
import type { ListWorldsAction } from '../../types/Action/GraphQL';

const logger = createLogger(['epics', 'graphql', 'listWorlds']);

export default (action$: ActionsObservable<ListWorldsAction>) =>
    action$.pipe(
        ofType(LIST_WORLDS),
        switchMap(
            async (): Promise => {
                try {
                    const worlds = await listWorlds();

                    return listWorldsSuccess(worlds);
                } catch (error) {
                    logger.error(error);
                    return listWorldsError([error]);
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
            world.logo.src = await Storage.get(`${world.id}.${world.logo.extension}`);
        } catch (error) {
            // NOOP
        }
    }
    return worlds;
}
