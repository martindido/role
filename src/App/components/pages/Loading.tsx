import React, { Component } from 'react';

import Page from '../../containers/pages/Page';
import { LoadingPageProps } from '../../types/Props/Pages/Loading';

export default class Loading extends Component<LoadingPageProps> {
    render() {
        const { currentUser, pastDelay } = this.props;

        if (!currentUser && !pastDelay) {
            return null;
        }
        return <Page withHeader={!!currentUser} forceLoading={true} noCrawl />;
    }
}
