import { GET_WORLDS } from '../../constants/actions';
import { setWorlds } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { listWorlds } from '../../graphql/queries';

import type { GetWorldsAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

export default (action$: ActionsObservable<GetWorldsAction>) =>
    action$.pipe(
        ofType(GET_WORLDS),
        switchMap(
            async (): Promise => {
                try {
                    return setWorlds(await getWorlds());
                }
                catch (error) {
                    console.log('getWorlds', 'error', error);
                    return setWorlds([]);
                }
            }
        )
    );

async function getWorlds() {
    const response = await API.graphql(graphqlOperation(listWorlds));

    return response.data.listWorlds.items;
}
