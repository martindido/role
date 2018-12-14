import {
    LOAD_WORLDS,
    LIST_WORLDS_SUCCESS,
    LIST_WORLDS_ERROR,
    SET_LOADING
} from '../../../constants/actions';
import { listWorlds, setWorlds } from '../../../actions/graphql';
import { setLoading, setNotFound } from '../../../actions/routing';
import { ofType } from 'redux-observable';
import { mergeMap, map, take, startWith } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { LoadWorldsAction } from '../../../types/Action';

export default (action$: ActionsObservable<LoadWorldsAction>) =>
    action$.pipe(
        ofType(LOAD_WORLDS),
        mergeMap(action => [
            setLoading(true),
            action
        ]),
        mergeMap(action => {
            if (action.type === SET_LOADING) {
                return [action];
            }
            return action$.pipe(
                ofType(LIST_WORLDS_SUCCESS, LIST_WORLDS_ERROR),
                take(1),
                map(action =>
                    action.type === LIST_WORLDS_SUCCESS ? setWorlds(action.payload) : setNotFound(true)
                ),
                mergeMap(action => [
                    action,
                    setLoading(false)
                ]),
                startWith(listWorlds())
            )
        })
    );
