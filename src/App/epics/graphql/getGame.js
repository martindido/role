import { GET_GAME } from '../../constants/actions';
import { getGameSuccess, getGameError } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { getGame as getGameQuery } from '../../graphql/queries';

import type { GetGameAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';
import type { GetGameQueryVariables } from '../../types/GraphQL';

export default (action$: ActionsObservable<GetGameAction>) =>
    action$.pipe(
        ofType(GET_GAME),
        switchMap(
            async (action: GetGameAction): Promise => {
                try {
                    const game = await getGame(action.payload);

                    return game ? getGameSuccess(game) : getGameError([new Error('Not Found')]);
                }
                catch (error) {
                    return getGameError([error]);
                }
            }
        )
    );

async function getGame(variables: GetGameQueryVariables) {
    const response = await API.graphql(graphqlOperation(getGameQuery, variables));
    
    return response.data.getGame;
}
