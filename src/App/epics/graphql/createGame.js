import { CREATE_GAME } from '../../constants/actions';
import { createGameSuccess, createGameError } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { createGame as createGameMutation } from '../../graphql/mutations';
import createLogger from '../../utils/logger';

import type { ActionsObservable } from 'redux-observable';
import type { CreateGameAction } from '../../types/Action/GraphQL';
import type { CreateGameInput } from '../../types/GraphQL';

const logger = createLogger(['epics', 'graphql', 'createGame']);

export default (action$: ActionsObservable<CreateGameAction>) =>
    action$.pipe(
        ofType(CREATE_GAME),
        switchMap(
            async (action: CreateGameAction): Promise => {
                try {
                    const game = await createGame(action.payload);

                    return createGameSuccess(game);
                } catch (error) {
                    logger.error(error);
                    return createGameError(error.errors ? error.errors : [error]);
                }
            }
        )
    );

async function createGame(game: CreateGameInput) {
    const response = await API.graphql(
        graphqlOperation(createGameMutation, {
            input: game
        })
    );

    return response.data.createGame;
}
