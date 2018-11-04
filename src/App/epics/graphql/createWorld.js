import { CREATE_WORLD } from '../../constants/actions';
import { setSubmitSuccess, setSubmitError } from '../../actions/submit';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { createWorld as createWorldMutation } from '../../graphql/mutations';

import type { CreateWorldAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';
import type { CreateWorldInput } from '../../types/GraphQL';

export default (action$: ActionsObservable<CreateWorldAction>) =>
    action$.pipe(
        ofType(CREATE_WORLD),
        switchMap(
            async (action: CreateWorldAction): Promise => {
                try {
                    const world = await createWorld(action.payload);

                    return setSubmitSuccess(world);
                }
                catch (error) {
                    return setSubmitError(error.errors ? error.errors : [error]);
                }
            }
        )
    );

async function createWorld(world: CreateWorldInput) {
    const response = await API.graphql(graphqlOperation(createWorldMutation, {
        input: world
    }));

    return response.data.createWorld;
}
