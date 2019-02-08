import { LOAD_WORLD, GET_WORLD_SUCCESS, GET_WORLD_ERROR, SET_LOADING } from '../../../constants/actions';
import { getWorld, setWorld } from '../../../actions/graphql';
import { setLoading, setNotFound } from '../../../actions/routing';
import { ofType } from 'redux-observable';
import { mergeMap, map, take, startWith } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { LoadWorldAction } from '../../../types/Action/Load';

export default (action$: ActionsObservable<LoadWorldAction>) =>
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
                startWith(getWorld(action.payload))
            );
        })
    );
