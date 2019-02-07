import {
    GET_CURRENT_LANGUAGE_SYNC,
    GET_CURRENT_LANGUAGE_SUCCESS,
    GET_CURRENT_LANGUAGE_ERROR
} from '../../../constants/actions';
import { getCurrentLanguage } from '../../../actions/locale';
import { ofType } from 'redux-observable';
import { mergeMap, take, startWith, tap } from 'rxjs/operators';

import type { ActionsObservable } from 'redux-observable';
import type { GetCurrentLanguageSyncAction } from '../../../types/Action';

export default (action$: ActionsObservable<GetCurrentLanguageSyncAction>) =>
    action$.pipe(
        ofType(GET_CURRENT_LANGUAGE_SYNC),
        mergeMap(getCurrentLanguageSyncAction =>
            action$.pipe(
                ofType(GET_CURRENT_LANGUAGE_SUCCESS, GET_CURRENT_LANGUAGE_ERROR),
                take(1),
                onError(GET_CURRENT_LANGUAGE_ERROR, getCurrentLanguageSyncAction),
                ofType(GET_CURRENT_LANGUAGE_SUCCESS),
                onSuccess(getCurrentLanguageSyncAction),
                startWith(getCurrentLanguage())
            )
        )
    );

function onError(type, action) {
    return tap(resultAction => {
        if (resultAction.type === type) {
            action.meta.onError(resultAction.payload);
        }
    });
}

function onSuccess(getCurrentLanguageSyncAction) {
    return tap(getCurrentLanguageSuccessAction =>
        getCurrentLanguageSyncAction.meta.onSuccess(getCurrentLanguageSuccessAction.payload)
    );
}
