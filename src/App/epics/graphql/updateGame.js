import { UPDATE_GAME } from '../../constants/actions';
import { updateGameSuccess, updateGameError } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { updateGame as updateGameMutation } from '../../graphql/mutations';
import createLogger from '../../utils/logger';

import type { ActionsObservable } from 'redux-observable';
import type { UpdateGameAction } from '../../types/Action/GraphQL';
import type { UpdateGameInput } from '../../types/GraphQL';

const logger = createLogger(['epics', 'graphql', 'updateGame']);

export default (action$: ActionsObservable<UpdateGameAction>) =>
    action$.pipe(
        ofType(UPDATE_GAME),
        switchMap(
            async (action: UpdateGameAction): Promise => {
                try {
                    const game = await updateGame(action.payload);

                    return updateGameSuccess(game);
                } catch (error) {
                    logger.error(error);
                    return updateGameError(error.errors ? error.errors : [error]);
                }
            }
        )
    );

async function updateGame(game: UpdateGameInput) {
    const response = await API.graphql(
        graphqlOperation(updateGameMutation, {
            input: game
        })
    );

    return response.data.updateGame;
}
