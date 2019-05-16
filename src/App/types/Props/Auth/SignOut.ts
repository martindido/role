import { RouteComponentProps } from 'react-router-dom';

import { SignOutActionCreator } from '../../Action/Auth';

export type SignOutDispatchProps = Readonly<{
    signOut: SignOutActionCreator;
}>;

export type SignOutProps = RouteComponentProps & SignOutDispatchProps;
