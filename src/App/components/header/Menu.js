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
    isLoading: boolean,
    forceLoading?: boolean,
    history: RouterHistory,
    location: Location,
    previousLocation: Location,
    currentUser: User,
} & MenuProps;

export default class Menu extends Component<Props> {
    static defaultProps = {
        forceLoading: false,
        admin: {
            items: []
        }
    }

    handleClickBack = () => {
        this.props.history.goBack();
    }

    render() {
        const {isLoading, forceLoading, previousLocation, location: {pathname}, currentUser, up, admin} = this.props;
        const loading = forceLoading || isLoading;
        const withBack = !loading
            && !!previousLocation
            && previousLocation.pathname !== pathname
            && previousLocation.pathname !== '/sign-in'
            && previousLocation.pathname !== '/sign-up'
            && previousLocation.pathname !== '/sign-up-confirm';
        const backEqualsUp = !!up && !!previousLocation && up === previousLocation.pathname;
        const withUp = !loading && !!up;
        const withAdmin = !loading && !!currentUser.isAdmin;

        return (
            <Fragment>
                { withBack ? (!backEqualsUp ? (
                    <SemanticMenu.Item name='back' onClick={ this.handleClickBack }>
                        <Icon name='backward'/>
                    </SemanticMenu.Item>
                ) : '') : '' }
                { withUp ? (
                    <SemanticMenu.Item as={ Link } name='up' to={ up }>
                        <Icon name='level up'/>
                    </SemanticMenu.Item>
                ) : '' }
                { withAdmin ? (
                    <AdminMenu { ...admin } />
                ) : '' }
                <SemanticMenu.Item as={ Link } name='sign-out' to='/sign-out'>
                    <Icon name='sign-out'/>
                </SemanticMenu.Item>
            </Fragment>
        );
    }
}

class AdminMenu extends Component<AdminProps> {
    render() {
        return this.props.items.map(item => (
            <SemanticMenu.Item as={ Link } key={ `${ item.key }-admin` } to={ `${ item.path }/admin` }>
                <Icon name={ item.icon }/>
            </SemanticMenu.Item>
        ));
    }
}
