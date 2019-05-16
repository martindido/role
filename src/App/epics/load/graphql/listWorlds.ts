import { ActionsObservable, ofType } from 'redux-observable';
import { map, mergeMap, startWith, take } from 'rxjs/operators';

import { listWorlds, setWorlds } from '../../../actions/graphql';
import { setLoading, setNotFound } from '../../../actions/routing';
import { LIST_WORLDS_ERROR, LIST_WORLDS_SUCCESS, LOAD_WORLDS, SET_LOADING } from '../../../constants/actions';
import { ListWorldsErrorAction, ListWorldsSuccessAction } from '../../../types/Action/GraphQL';
import { LoadWorldsAction } from '../../../types/Action/Load';

export default (action$: ActionsObservable<LoadWorldsAction | ListWorldsSuccessAction | ListWorldsErrorAction>) =>
    action$.pipe(
        ofType(LOAD_WORLDS),
        mergeMap(action => [setLoading(true), action]),
        mergeMap(action => {
            if (action.type === SET_LOADING) {
                return [action];
            }
            return action$.pipe(
                ofType(LIST_WORLDS_SUCCESS, LIST_WORLDS_ERROR),
                take(1),
                map(action => (action.type === LIST_WORLDS_SUCCESS ? setWorlds(action.payload) : setNotFound(true))),
                mergeMap(action => [action, setLoading(false)]),
                startWith(listWorlds())
            );
        })
    );
