import React, { Component, Fragment } from 'react';
import { Header as SemanticHeader, Image } from 'semantic-ui-react';

import Page from '../../containers/pages/Page';
import '../../styles/Worlds.css';
import { HeaderConfigProps } from '../../types/Props/Header/Header';
import { GamePageProps } from '../../types/Props/Pages/Game';

export default class Game extends Component<GamePageProps> {
    private static headerConfig(worldId: string, gameId: string): HeaderConfigProps {
        return {
            menu: {
                up: `/worlds/${worldId}`,
                admin: {
                    items: [
                        {
                            key: `games-${gameId}`,
                            path: `/worlds/${worldId}/games/${gameId}`,
                            icon: 'edit'
                        }
                    ]
                }
            }
        };
    }

    componentWillReceiveProps(nextProps: GamePageProps) {
        const {
            game,
            computedMatch: {
                params: { gameId }
            }
        } = nextProps;

        if (game && game.id !== gameId) {
            this.props.loadGame(gameId);
        }
    }

    render() {
        const {
            game,
            computedMatch: {
                params: { worldId, gameId }
            }
        } = this.props;
        const title = game ? game.name : 'Game';
        const header = Game.headerConfig(worldId, gameId);

        return (
            <Page title={title} header={header}>
                {game ? (
                    <Fragment>
                        <SemanticHeader as='h2' inverted>
                            <Image src={game.logo.src} circular /> {game.name}
                        </SemanticHeader>
                    </Fragment>
                ) : null}
            </Page>
        );
    }
}
