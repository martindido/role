import React, { Component } from 'react';
import Page from '../../containers/pages/Page';
import {
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
            id: string
        }
    }
};

export default class World extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        const {isLoading, isNotFound, world} = this.props;
        const id = this.props.computedMatch.params.id;
        const isSameId = id === prevProps.computedMatch.params.id;
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
                path: '/games',
                icon: 'add'
            });
        }
        return (
            <Page title={ title } header={ header }>
                { world ? (
                    <SemanticHeader as='h2' inverted>
                        <Image circular src={
                            require(`../../images/worlds/dungeons-and-dragons-logo.png`)
                        }/> { world.name }
                    </SemanticHeader>
                ) : null }
            </Page>
        );
    }
}
