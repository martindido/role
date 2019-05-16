import { LocalizeContextProps } from 'react-localize-redux';
import { RouteComponentProps } from 'react-router-dom';

import { SetCurrentUnconfirmedUserActionCreator } from '../../Action/Auth';
import { AuthenticateSyncActionCreator, SignUpSyncActionCreator } from '../../Action/Sync';
import { User } from '../../User';

export type SignUpDispatchProps = Readonly<{
    setCurrentUnconfirmedUser: SetCurrentUnconfirmedUserActionCreator;
    signUpSync: SignUpSyncActionCreator;
    authenticateSync: AuthenticateSyncActionCreator;
}>;

export type SignUpProps = RouteComponentProps &
    LocalizeContextProps &
    SignUpDispatchProps &
    Readonly<{
        currentUnconfirmedUser?: User;
    }>;
