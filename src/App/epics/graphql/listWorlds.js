import { LIST_WORLDS } from '../../constants/actions';
import { setWorlds } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
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
                }
                catch (error) {
                    console.log('listWorlds', 'error', error);
                    return setWorlds([]);
                }
            }
        )
    );

async function listWorlds() {
    const response = await API.graphql(graphqlOperation(listWorldsQuery));

    return response.data.listWorlds.items;
}
