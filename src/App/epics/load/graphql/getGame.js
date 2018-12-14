import {
    LOAD_GAME,
    GET_GAME_SUCCESS,
    GET_GAME_ERROR,
    SET_LOADING
} from '../../../constants/actions';
import { getGame, setGame } from '../../../actions/graphql';
import { setLoading, setNotFound } from '../../../actions/routing';
import { ofType } from 'redux-observable';
import { mergeMap, map, take, startWith } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { LoadGameAction } from '../../../types/Action';

export default (action$: ActionsObservable<LoadGameAction>) =>
    action$.pipe(
        ofType(LOAD_GAME),
        mergeMap(action => [
            setLoading(true),
            action
        ]),
        mergeMap(action => {
            if (action.type === SET_LOADING) {
                return [action];
            }
            return action$.pipe(
                ofType(GET_GAME_SUCCESS, GET_GAME_ERROR),
                take(1),
                map(action =>
                    action.type === GET_GAME_SUCCESS ? setGame(action.payload) : setNotFound(true)
                ),
                mergeMap(action => [
                    action,
                    setLoading(false)
                ]),
                startWith(getGame(action.payload))
            )
        })
    );
