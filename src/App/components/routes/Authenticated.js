import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import type { ComponentType } from 'react';
import type { Location } from 'react-router-dom';

export type Props = {
    component: ComponentType<any>,
    isAuthenticated: boolean,
    canAccess?: boolean,
    to?: string,
    location: Location
};

export default class Authenticated extends Component<Props> {
    static defaultProps = {
        canAccess: true
    }

    render() {
        const { component: Component, ...rest } = this.props;

        return (
            <Route
                render={() => {
                    return this.props.isAuthenticated && this.props.canAccess ? (
                        <Component {...rest} />
                    ) : (
                        <Redirect to={ this.props.to
                            ? this.props.to
                            : `/sign-in?redirect=${this.props.location.pathname}`
                        } />
                    )
                }}
            />
        );
    }
}
