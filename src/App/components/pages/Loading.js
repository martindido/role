import React, { Component } from 'react';
import Page from '../../containers/pages/Page';

import type { User } from '../../types/User';

export type Props = {
    currentUser?: User,
    pastDelay?: boolean,
    children?: Node
};

export default class Loading extends Component<Props> {
    static defaultProps = {
        pastDelay: true
    }

    render() {
        const {currentUser, pastDelay} = this.props;

        if (!currentUser && !pastDelay) {
            return null;
        }
        return (
            <Page withHeader={ !!currentUser } forceLoading={ true } noCrawl/>
        );
    }
}
