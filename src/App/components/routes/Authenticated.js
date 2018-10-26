import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import type { ComponentType } from 'react';
import type { Location } from 'react-router';
type Props = {
    component: ComponentType<any>,
    isAuthenticated: boolean,
    location: Location
};

export default class Authenticated extends Component<Props> {
    render() {
        const { component: Component, ...rest } = this.props;

        return (
            <Route
                render={() => {
                    return rest.isAuthenticated ? (
                        <Component {...rest} />
                    ) : (
                        <Redirect to={`/login?redirect=${rest.location.pathname}`} />
                    )
                }}
            />
        );
    }
}
