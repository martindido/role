import React, { Component } from 'react';
import { Paragraph } from '../styles';
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
                <Paragraph>Super embarrassing.</Paragraph>
            </Page>
        );
    }
};
