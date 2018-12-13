import React, { Component, Fragment } from 'react';
import Page from '../../containers/pages/Page';
import {
    List,
    Image,
    Header as SemanticHeader
} from 'semantic-ui-react';

import '../../styles/Worlds.css';

import type { World as WorldType } from '../../types/World';
import type {
    GetWorldActionCreator,
    UnsetWorldActionCreator,
    SetLoadingActionCreator,
    SetNotFoundActionCreator
} from '../../types/ActionCreator';
import { Link } from 'react-router-dom';

export type Props = {
    world?: WorldType,
    getWorld: GetWorldActionCreator,
    unsetWorld: UnsetWorldActionCreator,
    setLoading: SetLoadingActionCreator,
    setNotFound: SetNotFoundActionCreator,
    isLoading: boolean,
    isNotFound: boolean,
    computedMatch: {
        params: {
            worldId: string
        }
    }
};

export default class World extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        const {isLoading, isNotFound, world} = this.props;
        const id = this.props.computedMatch.params.worldId;
        const isSameId = id === prevProps.computedMatch.params.worldId;
        const isSameWorld = !!world && world.id === id;

        if (isNotFound) {
            if (!isSameId) {
                this.props.setNotFound(false);
            }
            else if (isLoading) {
                this.props.setLoading(false);
            }
        }
        else {
            if (isSameWorld && isLoading) {
                this.props.setLoading(false);
            }
            else if (!isSameWorld && !isLoading) {
                this.props.getWorld({
                    id
                });
                this.props.setLoading(true);
            }
        }
    }

    componentWillUnmount() {
        this.props.unsetWorld();
        this.props.setNotFound(false);
        this.props.setLoading(false);
    }

    render() {
        const {world} = this.props;
        const title = world ? world.name : 'World';
        const header = {
            menu: {
                up: '/',
                admin: {
                    items: []
                }
            }
        };

        if (world) {
            header.menu.admin.items.push({
                key: `worlds-${ world.id }`,
                path: `/worlds/${ world.id }`,
                icon: 'edit'
            });
            header.menu.admin.items.push({
                key: 'games',
                path: `/worlds/${ world.id }/games`,
                icon: 'add'
            });
        }
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
