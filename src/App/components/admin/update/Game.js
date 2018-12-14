import React, { Component, Fragment } from 'react';
import Page from '../../../containers/pages/Page';
import Form from '../../../containers/forms/admin/Game';
import { Header } from 'semantic-ui-react';

import type { Game as GameType } from '../../../types/Game';
import type { UpdateGameInput } from '../../../types/GraphQL';
import type { UpdateGameSubmitActionCreator } from '../../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    updateGameSubmit: UpdateGameSubmitActionCreator,
    computedMatch: {
        params: {
            worldId: string,
            gameId: string
        }
    },
    history: RouterHistory,
    isNotFound: boolean,
    game?: GameType
};

export default class Game extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        const gameUpdated = prevProps.game && prevProps.game !== this.props.game;

        if (gameUpdated) {
            this.props.history.push(this.getUp());
        }
    }

    handleSubmit = async (game: UpdateGameInput) => {
        try {
            await new Promise((resolve, reject) => {
                this.props.updateGameSubmit(game, {
                    resolve,
                    reject
                });
            })

        }
        catch (err) {
            throw err;
        }
    }

    getUp() {
        const {computedMatch: {params: {worldId, gameId}}, isNotFound} = this.props;
        const up = `/worlds/${ worldId }`;

        return isNotFound ? up : `${ up }/games/${ gameId }`;
    }

    render() {
        const {game} = this.props;
        const header = {
            menu: {
                up: this.getUp()
            }
        };

        return (
            <Page title='Game Admin' className='admin edit-game' header={ header }>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        { game ? `Edit ${ game.name }` : 'Edit game' }
                    </Header>
                    <Form form='edit-game' onSubmit={ this.handleSubmit }></Form>
                </Fragment>
            </Page>
        );
    }
}
