import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu as SemanticMenu, Icon, Dropdown } from 'semantic-ui-react';

import type { Location, RouterHistory } from 'react-router-dom';
import type { User } from '../../types/User';
import type { SetCurrentLanguageActionCreator } from '../../types/ActionCreator';
import type { Translate, SetActiveLanguage, Language } from '../../types/Locale';

export type AdminItemProps = {
    key: string,
    path: string,
    icon: string
};
export type AdminProps = {
    items: Array<AdminItemProps>
};
export type MenuProps = {
    up?: string,
    admin?: AdminProps
};
export type Props = {
    isLoading: boolean,
    forceLoading?: boolean,
    history: RouterHistory,
    location: Location,
    previousLocation: Location,
    currentUser: User,
    translate: Translate,
    setActiveLanguage: SetActiveLanguage,
    currentLanguage: Language,
    setCurrentLanguage: SetCurrentLanguageActionCreator
} & MenuProps;

export default class Menu extends Component<Props> {
    static defaultProps = {
        forceLoading: false,
        admin: {
            items: []
        }
    };

    handleClickBack = () => {
        this.props.history.goBack();
    };

    handleClickLanguage = (event: SyntheticEvent<>, { language }: { language: Language }) => {
        this.props.setCurrentLanguage(language);
        this.props.setActiveLanguage(language);
    };

    render() {
        const {
            translate,
            currentLanguage,
            isLoading,
            forceLoading,
            previousLocation,
            location: { pathname },
            currentUser,
            up,
            admin
        } = this.props;
        const loading = forceLoading || isLoading;
        const withBack =
            !loading &&
            !!previousLocation &&
            previousLocation.pathname !== pathname &&
            previousLocation.pathname !== '/sign-in' &&
            previousLocation.pathname !== '/sign-up' &&
            previousLocation.pathname !== '/sign-up-confirm';
        const backEqualsUp = !!up && !!previousLocation && up === previousLocation.pathname;
        const withUp = !loading && !!up;
        const withAdmin = !loading && !!currentUser.isAdmin;

        return (
            <Fragment>
                {withBack ? (
                    !backEqualsUp ? (
                        <SemanticMenu.Item name='back' onClick={this.handleClickBack}>
                            <Icon name='backward' />
                        </SemanticMenu.Item>
                    ) : (
                        ''
                    )
                ) : (
                    ''
                )}
                {withUp ? (
                    <SemanticMenu.Item as={Link} name='up' to={up}>
                        <Icon name='level up' />
                    </SemanticMenu.Item>
                ) : (
                    ''
                )}
                {withAdmin ? <AdminMenu {...admin} /> : ''}
                <Dropdown item name='language' icon='world'>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            language='en'
                            selected={currentLanguage === 'en'}
                            onClick={this.handleClickLanguage}
                        >
                            {translate('languages.english')}
                        </Dropdown.Item>
                        <Dropdown.Item
                            language='es'
                            selected={currentLanguage === 'es'}
                            onClick={this.handleClickLanguage}
                        >
                            {translate('languages.spanish')}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <SemanticMenu.Item as={Link} name='sign-out' to='/sign-out'>
                    <Icon name='sign-out' />
                </SemanticMenu.Item>
            </Fragment>
        );
    }
}

class AdminMenu extends Component<AdminProps> {
    render() {
        return this.props.items.map(item => (
            <SemanticMenu.Item as={Link} key={`${item.key}-admin`} to={`${item.path}/admin`}>
                <Icon name={item.icon} />
            </SemanticMenu.Item>
        ));
    }
}
