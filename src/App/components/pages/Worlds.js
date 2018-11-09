import React, { Component } from 'react';
import Page from '../../containers/pages/Page';

import type { Node } from 'react';
export type Props = {
    children: Node
};

export default class Worlds extends Component<Props> {
    render() {
        const { children } = this.props;

        return (
            <Page id='Worlds' title='Worlds'>
                { children }
            </Page>
        );
    }
}
