import { GET_CURRENT_PROFILE } from '../../constants/actions';
import { setCurrentProfile, unsetCurrentProfile } from '../../actions/profile';
import { setNotFound } from '../../actions/routing';
import { ofType } from 'redux-observable';
import { delay, concatMap } from 'rxjs/operators';

import pekka from '../../assets/pekka.jpg';
import arvidsson from '../../assets/arvidsson.jpg';

import type { GetCurrentProfileAction } from '../../types/Action';
import type { ActionsObservable } from 'redux-observable';

const profiles = [{
    id: 1,
    name: 'Pekka Rinne',
    image: pekka
},
{
    id: 2,
    name: 'Viktor Arvidsson',
    image: arvidsson
}];

export default (action$: ActionsObservable<GetCurrentProfileAction>) =>
    action$.pipe(
        ofType(GET_CURRENT_PROFILE),
        delay(2500),
        concatMap((action: GetCurrentProfileAction) => {
            const profile = profiles[action.payload - 1];

            if (profile) {
                return [
                    setCurrentProfile(profile)
                ];
            }
            return [
                setNotFound(true),
                unsetCurrentProfile()
            ];
        })
    );
