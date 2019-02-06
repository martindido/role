import React, { Component, Fragment } from 'react';
import Page from '../../../containers/pages/Page';
import Form from '../../../containers/forms/admin/Game';
import { Header } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';

import type { Game as GameType } from '../../../types/Game';
import type { CreateGameSync } from '../../../types/Sync';
import type { CreateGameSyncActionCreator } from '../../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    createGameSync: CreateGameSyncActionCreator,
    computedMatch: {
        params: {
            worldId: string
        }
    },
    history: RouterHistory,
    game?: GameType
};

export default class Game extends Component<Props> {
    handleSubmit = async (payload: CreateGameSync) => {
        try {
            const game = await this.createGame(payload);

            this.props.history.push(`/worlds/${game.world.id}/games/${game.id}`);
        } catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    };

    createGame = async (payload: CreateGameSync) => {
        return await new Promise((resolve, reject) => {
            this.props.createGameSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    };

    render() {
        const {
            computedMatch: {
                params: { worldId }
            }
        } = this.props;
        const header = {
            menu: {
                up: `/worlds/${worldId}`
            }
        };

        return (
            <Page title='Game Admin' className='admin new-game' header={header}>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        Add a new game
                    </Header>
                    <Form form='new-game' onSubmit={this.handleSubmit} />
                </Fragment>
            </Page>
        );
    }
}
