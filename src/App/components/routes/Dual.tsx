import React, { Component } from 'react';

import AuthenticatedRoute from '../../containers/routes/Authenticated';
import UnauthenticatedRoute from '../../containers/routes/Unauthenticated';
import { DualRouteProps } from '../../types/Props/Routes/Dual';

export default class Dual extends Component<DualRouteProps> {
    render() {
        const { isAuthenticated, authenticatedComponent, unauthenticatedComponent, ...rest } = this.props;

        return isAuthenticated ? (
            <AuthenticatedRoute component={authenticatedComponent} {...rest} />
        ) : (
            <UnauthenticatedRoute component={unauthenticatedComponent} {...rest} />
        );
    }
}
