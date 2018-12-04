import React, { Component } from 'react';
import Page from '../../containers/pages/Page';
import { Segment } from 'semantic-ui-react';

import type { Node } from 'react';
type Props = {
    children?: Node
};

export default class NotFound extends Component<Props> {
    render() {
        return (
            <Page
                id='not-found'
                className='not-found'
                title='Not Found'
                description='This is embarrassing.'
                noCrawl
            >
                { this.props.children }
                <Segment basic>
                    <p>Super embarrassing.</p>
                </Segment>
            </Page>
        );
    }
};
