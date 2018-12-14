import React, { Component, Fragment } from 'react';
import Page from '../../containers/pages/Page';
import Form from '../../containers/forms/admin/Game';
import { Header } from 'semantic-ui-react';

import type { World } from '../../types/World';
import type { Game as GameType } from '../../types/Game';
import type { UpdateGameInput, CreateGameInput } from '../../types/GraphQL';
import type {
    CreateGameSubmitActionCreator,
    UpdateGameSubmitActionCreator,
    SetGameActionCreator
} from '../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    createGameSubmit: CreateGameSubmitActionCreator,
    updateGameSubmit: UpdateGameSubmitActionCreator,
    setGame: SetGameActionCreator,
    computedMatch: {
        params: {
            worldId: string,
            gameId: string
        }
    },
    history: RouterHistory,
    isNotFound: boolean,
    world?: World,
    game?: GameType
};

export default class Game extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        const {game, computedMatch: {params: {gameId}}} = this.props;
        const gameCreated = !gameId && game;
        const gameUpdated = gameId && prevProps.game && prevProps.game !== game;

        if (gameCreated || gameUpdated) {
            this.props.history.push(this.getUp());
        }
    }

    handleSubmitCreate = async (game: CreateGameInput) => {
        try {
            await new Promise((resolve, reject) => {
                this.props.createGameSubmit(game, {
                    resolve,
                    reject
                });
            })

        }
        catch (err) {
            throw err;
        }
    }

    handleSubmitUpdate = async (game: UpdateGameInput) => {
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

        return isNotFound ? up : `${ up }${ gameId ? `/games/${ gameId }` : '' }`;
    }

    render() {
        const {computedMatch: {params: {gameId}}, game} = this.props;
        const handleSubmit = gameId ? this.handleSubmitUpdate : this.handleSubmitCreate;
        const header = {
            menu: {
                up: this.getUp()
            }
        };

        return (
            <Page title='Game Admin' className='admin new-game' header={ header }>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        { game ? `Edit ${ game.name }` : 'Add a new game' }
                    </Header>
                    <Form onSubmit={ handleSubmit }></Form>
                </Fragment>
            </Page>
        );
    }
}
