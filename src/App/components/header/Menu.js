import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu as SemanticMenu, Icon } from 'semantic-ui-react';

import type { Location, RouterHistory } from 'react-router-dom';
import type { User } from '../../types/User';

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
    history: RouterHistory,
    location: Location,
    previousLocation: Location,
    currentUser: User,
} & MenuProps;

export default class Menu extends Component<Props> {
    static defaultProps = {
        admin: {
            items: []
        }
    }

    handleClickBack = () => {
        this.props.history.goBack();
    }

    render() {
        const { location, previousLocation, currentUser, up, admin } = this.props;
        const upIsNotBack = !!up && (!previousLocation || previousLocation.pathname !== up);

        return (
            <Fragment>
                { location.pathname === '/' ? '' : (
                    <SemanticMenu.Item name='back' onClick={ this.handleClickBack } >
                        <Icon name='backward' />
                    </SemanticMenu.Item>
                ) }
                { upIsNotBack ? (
                    <SemanticMenu.Item as={ Link } name='up' to={ up }>
                        <Icon name='level up' />
                    </SemanticMenu.Item>
                ) : '' }
                { currentUser.isAdmin ? (
                    <AdminMenu { ...admin } />
                ) : '' }
                <SemanticMenu.Item as={ Link } name='sign-out' to='/sign-out'>
                    <Icon name='sign-out' />
                </SemanticMenu.Item>
            </Fragment>
        );
    }
}

class AdminMenu extends Component<AdminProps> {
    render() {
        return this.props.items.map(item => (
            <SemanticMenu.Item as={ Link } key={ `admin-${item.key}` } to={ `/admin${item.path}` }>
                <Icon name={ item.icon } />
            </SemanticMenu.Item>
        ));
    }
}
