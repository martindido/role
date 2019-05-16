import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthenticatedRouteProps } from '../../types/Props/Routes/Authenticated';
import { createPropsGetter } from '../../utils/props';

export default class Authenticated extends Component<AuthenticatedRouteProps> {
    static defaultProps = {
        canAccess: true
    };

    static getProps = createPropsGetter(Authenticated.defaultProps);

    render() {
        const { component: RouteComponent, to, isAuthenticated, canAccess, ...rest } = Authenticated.getProps(
            this.props
        );

        return (
            <Route
                render={() => {
                    return isAuthenticated && canAccess ? (
                        <RouteComponent {...rest} />
                    ) : (
                        <Redirect to={to ? to : `/sign-in?redirect=${this.props.location.pathname}`} />
                    );
                }}
            />
        );
    }
}
