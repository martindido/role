import { LocalizeContextProps } from 'react-localize-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AuthenticateSyncActionCreator, SignInSyncActionCreator } from '../../Action/Sync';

export type SignInDispatchProps = Readonly<{
    signInSync: SignInSyncActionCreator;
    authenticateSync: AuthenticateSyncActionCreator;
}>;

export type SignInProps = RouteComponentProps & LocalizeContextProps & SignInDispatchProps;
