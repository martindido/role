import { LocalizeContextProps } from 'react-localize-redux';

import { AuthenticateSyncActionCreator, GetCurrentLanguageSyncActionCreator } from '../Action/Sync';

export type AppProps = Readonly<{
    authenticateSync: AuthenticateSyncActionCreator;
    getCurrentLanguageSync: GetCurrentLanguageSyncActionCreator;
}> &
    LocalizeContextProps;
