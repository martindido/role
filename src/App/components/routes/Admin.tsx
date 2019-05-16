import React, { Component } from 'react';

import Authenticated from '../../containers/routes/Authenticated';
import { AdminRouteProps } from '../../types/Props/Routes/Admin';

export default class Admin extends Component<AdminRouteProps> {
    render() {
        const { isAdmin, ...rest } = this.props;

        return <Authenticated canAccess={isAdmin} {...rest} />;
    }
}
