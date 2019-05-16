import { User } from '../../User';

import { MenuConfigProps } from './Menu';

export type HeaderStateDefaultProps = Readonly<{
    currentUser: User;
}>;

export type HeaderConfigDefaultProps = Readonly<{
    menu: MenuConfigProps;
    withSearch: boolean;
    forceLoading: boolean;
}>;

export type HeaderDefaultProps = HeaderStateDefaultProps & HeaderConfigDefaultProps;

export type HeaderStateProps = Partial<HeaderStateDefaultProps>;

export type HeaderConfigProps = Partial<HeaderConfigDefaultProps>;

export type HeaderProps = HeaderStateProps & HeaderConfigProps;
