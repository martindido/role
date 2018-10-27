import React, { Component } from 'react';
import Page from '../containers/Page';

type Props = {};

export default class NotFound extends Component<Props> {
    render() {
        return (
            <Page
                id="not-found"
                className="not-found"
                title="Not Found"
                description="This is embarrassing."
                noCrawl
            >
                <p>Super embarrassing.</p>
            </Page>
        );
    }
};
