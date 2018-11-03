import React, { Component } from 'react';
import Authenticated from '../../containers/routes/Authenticated';

export type Props = {
    isAdmin: boolean
};

export default class Admin extends Component<Props> {
    render() {
        const { isAdmin, ...rest } = this.props;

        return (
            <Authenticated canAccess={ isAdmin } { ...rest } />
        );
    }
}
