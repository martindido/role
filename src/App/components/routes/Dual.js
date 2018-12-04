import React, { Component } from 'react';
import AuthenticatedRoute from '../../containers/routes/Authenticated';
import UnauthenticatedRoute from '../../containers/routes/Unauthenticated';

import type { ComponentType } from 'react';

export type Props = {
    authenticatedComponent: ComponentType<any>,
    unauthenticatedComponent: ComponentType<any>,
    isAuthenticated: boolean,
};

export default class Dual extends Component<Props> {
    static defaultProps = {
        canAccess: true
    }

    render() {
        const {
            authenticatedComponent,
            unauthenticatedComponent,
            ...rest
        } = this.props;

        return this.props.isAuthenticated ? (
                <AuthenticatedRoute component={ authenticatedComponent } {...rest} />
            ) : (
                <UnauthenticatedRoute component={ unauthenticatedComponent } {...rest} />
            )
        };
}
