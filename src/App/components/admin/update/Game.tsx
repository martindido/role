import React, { Component, Fragment } from 'react';
import { SubmissionError } from 'redux-form';
import { Header } from 'semantic-ui-react';

import Form from '../../../containers/forms/admin/Game';
import Page from '../../../containers/pages/Page';
import { GameAdminFormData, UpdateGameFormData } from '../../../types/Form/Admin/Game';
import { GameUpdateAdminProps } from '../../../types/Props/Admin/Update/Game';
import { HeaderConfigProps } from '../../../types/Props/Header/Header';

export default class GameUpdateAdmin extends Component<GameUpdateAdminProps> {
    private static headerConfig(up: string): HeaderConfigProps {
        return {
            menu: {
                up
            }
        };
    }

    handleSubmit = async (payload: GameAdminFormData) => {
        try {
            await this.updateGame(payload as UpdateGameFormData);
            this.props.history.push(this.getUp());
        } catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    }

    updateGame = async (payload: UpdateGameFormData) => {
        return await new Promise((resolve, reject) => {
            this.props.updateGameSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    }

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
        const { translate, game } = this.props;
        const header = GameUpdateAdmin.headerConfig(this.getUp());

        return (
            <Page title='Game Admin' className='admin edit-game' header={header}>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        {translate('forms.update')} {game ? game.name : translate('game')}
                    </Header>
                    <Form form='edit-game' onSubmit={this.handleSubmit} />
                </Fragment>
            </Page>
        );
    }
}
