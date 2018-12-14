import React, { Component, Fragment } from 'react';
import Page from '../../containers/pages/Page';
import {
    Image,
    Header as SemanticHeader
} from 'semantic-ui-react';

import '../../styles/Worlds.css';

import type { Game as GameType } from '../../types/Game';

export type Props = {
    game?: GameType,
    computedMatch: {
        params: {
            worldId: string,
            gameId: string
        }
    }
};

export default class Game extends Component<Props> {
    render() {
        const {game, computedMatch: {params: {gameId, worldId}}} = this.props;
        const title = game ? game.name : 'Game';
        const header = {
            menu: {
                up: `/worlds/${ worldId }`,
                admin: {
                    items: [{
                        key: `games-${ gameId }`,
                        path: `/worlds/${ worldId }/games/${ gameId }`,
                        icon: 'edit'
                    }]
                }
            }
        };

        return (
            <Page title={ title } header={ header }>
                { game ? (
                    <Fragment>
                        <SemanticHeader as='h2' inverted>
                            <Image circular src={
                                require(`../../images/worlds/dungeons-and-dragons-logo.png`)
                            }/> { game.name }
                        </SemanticHeader>
                    </Fragment>
                ) : null }
            </Page>
        );
    }
}
