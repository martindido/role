import React, { Component } from 'react';

import Page from '../../containers/pages/Page';
import { NotFoundPageProps } from '../../types/Props/Pages/NotFound';

export default class NotFound extends Component<NotFoundPageProps> {
    render() {
        const { isAuthenticated } = this.props;

        return <Page withHeader={isAuthenticated} forceNotFound={true} noCrawl />;
    }
}
