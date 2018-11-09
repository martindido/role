import React, { Component } from 'react';
import Page from '../../containers/pages/Page';

import type { Node } from 'react';
import type { World as WorldType } from '../../types/World';
export type Props = {
    world: WorldType,
    children: Node
};

export default class World extends Component<Props> {
    render() {
        const { world, children } = this.props;

        return (
            <Page id={ `World-${world.id}` } title={ world.name }>
                { children }
            </Page>
        );
    }
}
