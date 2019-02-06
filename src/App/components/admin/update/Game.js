import React, { Component, Fragment } from 'react';
import Page from '../../../containers/pages/Page';
import Form from '../../../containers/forms/admin/Game';
import { Header } from 'semantic-ui-react';

import type { Game as GameType } from '../../../types/Game';
import type { UpdateGameSync } from '../../../types/Sync';
import type { UpdateGameSyncActionCreator } from '../../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';
import { SubmissionError } from 'redux-form';

export type Props = {
    updateGameSync: UpdateGameSyncActionCreator,
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
    handleSubmit = async (payload: UpdateGameSync) => {
        try {
            await this.updateGame(payload);
            this.props.history.push(this.getUp());
        } catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    };

    updateGame = async (payload: UpdateGameSync) => {
        return await new Promise((resolve, reject) => {
            this.props.updateGameSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    };

    getUp() {
        const {
            computedMatch: {
                params: { worldId, gameId }
            },
            isNotFound
        } = this.props;
        const up = `/worlds/${worldId}`;

        return isNotFound ? up : `${up}/games/${gameId}`;
    }

    render() {
        const { game } = this.props;
        const header = {
            menu: {
                up: this.getUp()
            }
        };

        return (
            <Page title='Game Admin' className='admin edit-game' header={header}>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        {game ? `Edit ${game.name}` : 'Edit game'}
                    </Header>
                    <Form form='edit-game' onSubmit={this.handleSubmit} />
                </Fragment>
            </Page>
        );
    }
}
