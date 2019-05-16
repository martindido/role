import { ActionsObservable, ofType } from 'redux-observable';
import { map, mergeMap, startWith, take } from 'rxjs/operators';

import { getGame, setGame } from '../../../actions/graphql';
import { setLoading, setNotFound } from '../../../actions/routing';
import { GET_GAME_ERROR, GET_GAME_SUCCESS, LOAD_GAME, SET_LOADING } from '../../../constants/actions';
import { GetGameErrorAction, GetGameSuccessAction } from '../../../types/Action/GraphQL';
import { LoadGameAction } from '../../../types/Action/Load';

export default (action$: ActionsObservable<LoadGameAction | GetGameSuccessAction | GetGameErrorAction>) =>
    action$.pipe(
        ofType(LOAD_GAME),
        mergeMap(action => [setLoading(true), action]),
        mergeMap(action => {
            if (action.type === SET_LOADING) {
                return [action];
            }
            return action$.pipe(
                ofType(GET_GAME_SUCCESS, GET_GAME_ERROR),
                take(1),
                map(action => (action.type === GET_GAME_SUCCESS ? setGame(action.payload) : setNotFound(true))),
                mergeMap(action => [action, setLoading(false)]),
                startWith(getGame((action as LoadGameAction).payload))
            );
        })
    );
