import { ActionsObservable, ofType } from 'redux-observable';
import { map, mergeMap, startWith, take } from 'rxjs/operators';

import { getWorld, setWorld } from '../../../actions/graphql';
import { setLoading, setNotFound } from '../../../actions/routing';
import { GET_WORLD_ERROR, GET_WORLD_SUCCESS, LOAD_WORLD, SET_LOADING } from '../../../constants/actions';
import { GetWorldErrorAction, GetWorldSuccessAction } from '../../../types/Action/GraphQL';
import { LoadWorldAction } from '../../../types/Action/Load';

export default (action$: ActionsObservable<LoadWorldAction | GetWorldSuccessAction | GetWorldErrorAction>) =>
    action$.pipe(
        ofType(LOAD_WORLD),
        mergeMap(action => [setLoading(true), action]),
        mergeMap(action => {
            if (action.type === SET_LOADING) {
                return [action];
            }
            return action$.pipe(
                ofType(GET_WORLD_SUCCESS, GET_WORLD_ERROR),
                take(1),
                map(action => (action.type === GET_WORLD_SUCCESS ? setWorld(action.payload) : setNotFound(true))),
                mergeMap(action => [action, setLoading(false)]),
                startWith(getWorld((action as LoadWorldAction).payload))
            );
        })
    );
