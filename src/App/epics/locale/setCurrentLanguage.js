import { SET_CURRENT_LANGUAGE } from '../../constants/actions';
import { setCurrentLanguageSuccess, setCurrentLanguageError } from '../../actions/locale';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';

import type { ActionsObservable, Promise } from 'redux-observable';
import type { SetCurrentLanguageAction } from '../../types/Action/Locale';

export default (action$: ActionsObservable<SetCurrentLanguageAction>) =>
    action$.pipe(
        ofType(SET_CURRENT_LANGUAGE),
        switchMap(
            async (action: SetCurrentLanguageAction): Promise => {
                try {
                    await setCurrentLanguage(action.payload);
                    return setCurrentLanguageSuccess();
                } catch (error) {
                    console.log('setCurrentLanguage', 'error', error);
                    return setCurrentLanguageError(error);
                }
            }
        )
    );

async function setCurrentLanguage(language) {
    const user = await Auth.currentAuthenticatedUser();

    await Auth.updateUserAttributes(user, {
        locale: language
    });
}
