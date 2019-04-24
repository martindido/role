import { GET_GAME } from '../../constants/actions';
import { getGameSuccess, getGameError } from '../../actions/graphql';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { getGame as getGameQuery } from '../../graphql/queries';
import createLogger from '../../utils/logger';

import type { ActionsObservable, Promise as PromiseType } from 'redux-observable';
import type { GetGameAction } from '../../types/Action/GraphQL';
import type { GetGameQueryVariables } from '../../types/GraphQL';

const logger = createLogger(['epics', 'graphql', 'getGame']);

export default (action$: ActionsObservable<GetGameAction>) =>
    action$.pipe(
        ofType(GET_GAME),
        switchMap(
            async (action: GetGameAction): PromiseType => {
                try {
                    const game = await getGame(action.payload);

                    return game ? getGameSuccess(game) : getGameError([new Error('Not Found')]);
                } catch (error) {
                    logger.error(error);
                    return getGameError([error]);
                }
            }
        )
    );

async function getGame(variables: GetGameQueryVariables) {
    const response = await API.graphql(graphqlOperation(getGameQuery, variables));
    const game = response.data.getGame;

    try {
        game.logo.src = await Storage.get(`${game.id}.${game.logo.extension}`);
    } catch (error) {
        // NOOP
    }
    return game;
}
