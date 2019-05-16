import queryString from 'query-string';
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { UnauthenticatedRouteProps } from '../../types/Props/Routes/Unauthenticated';
import { RedirectQuery } from '../../types/Query';

export default class Unauthenticated extends Component<UnauthenticatedRouteProps> {
    public render() {
        const { component: RouteComponent, isAuthenticated, ...rest } = this.props;
        const query = queryString.parse(rest.location.search);
        const redirect = this.getRedirect(query);

        return (
            <Route
                render={() => {
                    return isAuthenticated ? <Redirect to={redirect} /> : <RouteComponent {...rest} />;
                }}
            />
        );
    }
    private getRedirect({ redirect }: RedirectQuery) {
        return (Array.isArray(redirect) ? redirect.pop() : redirect) || '/';
    }
}
