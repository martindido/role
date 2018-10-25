import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import queryString from 'query-string';

import type { ComponentType } from 'react';
import type { Location } from 'react-router';
type Props = {
    component: ComponentType<any>,
    isAuthenticated: boolean,
    location: Location
};
type Query = {
    redirect?: string | Array<string> | null
};

export default class UnauthenticatedRoute extends Component<Props> {
    getRedirect(query: Query) {
        let redirect = query.redirect || '';

        if (Array.isArray(redirect)) {
            redirect = redirect.pop();
        }
        return redirect;
    }

    render() {
        const { component: Component, ...rest } = this.props;
        const query = queryString.parse(rest.location.search);
        const redirect = this.getRedirect(query);

        return (
            <Route
                render={() => {
                    return rest.isAuthenticated ? (
                        <Redirect to={redirect || '/dashboard'} />
                    ) : (
                        <Component {...rest} />
                    )
                }}
            />
        );
    }
}