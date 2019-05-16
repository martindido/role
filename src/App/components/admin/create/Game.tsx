import React, { Component, Fragment } from 'react';
import { SubmissionError } from 'redux-form';
import { Header } from 'semantic-ui-react';

import Form from '../../../containers/forms/admin/Game';
import Page from '../../../containers/pages/Page';
import { CreateGameFormData, GameAdminFormData } from '../../../types/Form/Admin/Game';
import { Game } from '../../../types/Game';
import { GameCreateAdminProps } from '../../../types/Props/Admin/Create/Game';
import { HeaderConfigProps } from '../../../types/Props/Header/Header';

export default class GameCreateAdmin extends Component<GameCreateAdminProps> {
    private static headerConfig(worldId: string): HeaderConfigProps {
        return {
            menu: {
                up: `/worlds/${worldId}`
            }
        };
    }

    handleSubmit = async (payload: GameAdminFormData) => {
        try {
            const game = await this.createGame(payload as CreateGameFormData);

            this.props.history.push(`/worlds/${game.world.id}/games/${game.id}`);
        } catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    }

    createGame = async (payload: CreateGameFormData) => {
        return await new Promise<Game>((resolve, reject) => {
            this.props.createGameSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    }

    render() {
        const {
            translate,
            computedMatch: {
                params: { worldId }
            }
        } = this.props;
        const header = GameCreateAdmin.headerConfig(worldId);

        return (
            <Page title='Game Admin' className='admin new-game' header={header}>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        {translate('forms.create')} {translate('game')}
                    </Header>
                    <Form form='new-game' onSubmit={this.handleSubmit} />
                </Fragment>
            </Page>
        );
    }
}
