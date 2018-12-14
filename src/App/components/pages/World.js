import React, { Component, Fragment } from 'react';
import Page from '../../containers/pages/Page';
import {
    List,
    Image,
    Header as SemanticHeader
} from 'semantic-ui-react';

import '../../styles/Worlds.css';

import type { World as WorldType } from '../../types/World';
import { Link } from 'react-router-dom';

export type Props = {
    world?: WorldType,
    computedMatch: {
        params: {
            worldId: string
        }
    }
};

export default class World extends Component<Props> {
    render() {
        const {world, computedMatch: {params: {worldId}}} = this.props;
        const title = world ? world.name : 'World';
        const header = {
            menu: {
                up: '/',
                admin: {
                    items: [{
                        key: `worlds-${ worldId }`,
                        path: `/worlds/${ worldId }`,
                        icon: 'edit'
                    }, {
                        key: 'games',
                        path: `/worlds/${ worldId }/games`,
                        icon: 'add'
                    }]
                }
            }
        };

        return (
            <Page title={ title } header={ header }>
                { world ? (
                    <Fragment>
                        <SemanticHeader as='h2' inverted>
                            <Image circular src={
                                require(`../../images/worlds/dungeons-and-dragons-logo.png`)
                            }/> { world.name }
                        </SemanticHeader>
                        { world.games.length ? (
                            <List animated divided selection verticalAlign='middle' size='massive' inverted>
                                { world.games.map(game => (
                                    <List.Item as={ Link } to={ `/worlds/${ world.id }/games/${ game.id }` }
                                               key={ game.id }>
                                        <Image avatar src={
                                            require(`../../images/worlds/dungeons-and-dragons-logo.png`)
                                        }/>
                                        <List.Content>
                                            <List.Header>{ game.name }</List.Header>
                                        </List.Content>
                                    </List.Item>
                                )) }
                            </List>
                        ) : null }
                    </Fragment>
                ) : null }
            </Page>
        );
    }
}
