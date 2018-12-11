import React, { Component } from 'react';
import Page from '../../containers/pages/Page';

import type { User } from '../../types/User';

type Props = {
    currentUser?: User
};

export default class NotFound extends Component<Props> {
    render() {
        const {currentUser} = this.props;

        return (
            <Page withHeader={ !!currentUser } forceNotFound={ true } noCrawl/>
        );
    }
};
