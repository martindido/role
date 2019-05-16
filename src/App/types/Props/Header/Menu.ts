import { Location } from 'history';
import { LocalizeContextProps } from 'react-localize-redux';
import { RouteComponentProps } from 'react-router-dom';

import { SetCurrentLanguageActionCreator } from '../../Action/Locale';
import { Language } from '../../Locale';

import { AdminMenuProps } from './AdminMenu';

export type MenuConfigDefaultProps = Readonly<{
    up: string;
    forceLoading: boolean;
    admin: AdminMenuProps;
}>;

export type MenuDefaultProps = MenuConfigDefaultProps;

export type MenuStateProps = Readonly<{
    isLoading: boolean;
    previousLocation?: Location<any>;
    isAdmin: boolean;
    currentLanguage: Language;
    setCurrentLanguage: SetCurrentLanguageActionCreator;
}>;

export type MenuConfigProps = Partial<MenuConfigDefaultProps>;

export type MenuProps = MenuStateProps & MenuConfigProps & RouteComponentProps & LocalizeContextProps;
