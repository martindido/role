import { LocalizeContextProps } from 'react-localize-redux';
import { RouteComponentProps } from 'react-router-dom';

import { UnsetCurrentUnconfirmedUserActionCreator } from '../../Action/Auth';
import { SignUpConfirmSyncActionCreator } from '../../Action/Sync';
import { User } from '../../User';

export type SignUpConfirmDispatchProps = Readonly<{
    signUpConfirmSync: SignUpConfirmSyncActionCreator;
    unsetCurrentUnconfirmedUser: UnsetCurrentUnconfirmedUserActionCreator;
}>;

export type SignUpConfirmProps = RouteComponentProps &
    LocalizeContextProps &
    SignUpConfirmDispatchProps &
    Readonly<{
        currentUnconfirmedUser?: User;
    }>;
