import React, { Component, Fragment, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItemProps, Icon, Menu as SemanticMenu } from 'semantic-ui-react';

import { MenuProps } from '../../types/Props/Header/Menu';
import { createPropsGetter } from '../../utils/props';

import { AdminMenu } from './AdminMenu';

export default class Menu extends Component<MenuProps> {
    static defaultProps = {
        up: '',
        forceLoading: false,
        admin: {}
    };

    static getProps = createPropsGetter(Menu.defaultProps);

    handleClickBack = () => {
        this.props.history.goBack();
    }

    handleClickLanguage = (event: SyntheticEvent, { language }: DropdownItemProps) => {
        this.props.setCurrentLanguage(language);
        this.props.setActiveLanguage(language);
    }

    render() {
        const {
            translate,
            currentLanguage,
            isAdmin,
            previousLocation,
            isLoading,
            forceLoading,
            location: { pathname },
            up,
            admin
        } = Menu.getProps(this.props);
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
        const withAdmin = !loading && isAdmin;

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
                            onClick={this.handleClickLanguage}>
                            {translate('languages.english')}
                        </Dropdown.Item>
                        <Dropdown.Item
                            language='es'
                            selected={currentLanguage === 'es'}
                            onClick={this.handleClickLanguage}>
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
