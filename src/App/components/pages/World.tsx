import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header as SemanticHeader, Image, List } from 'semantic-ui-react';

import Page from '../../containers/pages/Page';
import '../../styles/Worlds.css';
import { HeaderConfigProps } from '../../types/Props/Header/Header';
import { WorldPageProps } from '../../types/Props/Pages/World';

export default class World extends Component<WorldPageProps> {
    private static headerConfig(worldId: string): HeaderConfigProps {
        return {
            menu: {
                up: '/',
                admin: {
                    items: [
                        {
                            key: `worlds-${worldId}`,
                            path: `/worlds/${worldId}`,
                            icon: 'edit'
                        },
                        {
                            key: 'games',
                            path: `/worlds/${worldId}/games`,
                            icon: 'add'
                        }
                    ]
                }
            }
        };
    }

    componentWillReceiveProps(nextProps: WorldPageProps) {
        const {
            world,
            computedMatch: {
                params: { worldId }
            }
        } = nextProps;

        if (world && world.id !== worldId) {
            this.props.loadWorld(worldId);
        }
    }

    render() {
        const {
            world,
            computedMatch: {
                params: { worldId }
            }
        } = this.props;
        const title = world ? world.name : 'World';
        const header = World.headerConfig(worldId);

        return (
            <Page title={title} header={header}>
                {world ? (
                    <Fragment>
                        <SemanticHeader as='h2' inverted>
                            <Image src={world.logo.src} circular /> {world.name}
                        </SemanticHeader>
                        {world.games.length ? (
                            <List animated divided selection verticalAlign='middle' size='massive' inverted>
                                {world.games.map((game) => (
                                    <List.Item as={Link} to={`/worlds/${world.id}/games/${game.id}`} key={game.id}>
                                        <Image src={game.logo.src} avatar />
                                        <List.Content>
                                            <List.Header>{game.name}</List.Header>
                                        </List.Content>
                                    </List.Item>
                                ))}
                            </List>
                        ) : null}
                    </Fragment>
                ) : null}
            </Page>
        );
    }
}
