import { CREATE_GAME } from '../../constants/actions';
import { createGameSuccess, createGameError } from '../../actions/graphql';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { createGame as createGameMutation } from '../../graphql/mutations';

import type { ActionsObservable } from 'redux-observable';
import type { CreateGameAction } from '../../types/Action';
import type { CreateGameInput } from '../../types/GraphQL';

export default (action$: ActionsObservable<CreateGameAction>) =>
    action$.pipe(
        ofType(CREATE_GAME),
        switchMap(
            async (action: CreateGameAction): Promise => {
                try {
                    const game = await createGame(action.payload);

                    return createGameSuccess(game);
                }
                catch (error) {
                    console.log('createGame', 'error', error);
                    return createGameError(error.errors ? error.errors : [error]);
                }
            }
        )
    );

async function createGame(game: CreateGameInput) {
    const response = await API.graphql(graphqlOperation(createGameMutation, {
        input: game
    }));

    return response.data.createGame;
}
