import React, { Component, Fragment } from 'react';
import Page from '../../../containers/pages/Page';
import Form from '../../../containers/forms/admin/Game';
import { Header } from 'semantic-ui-react';

import type { Game as GameType } from '../../../types/Game';
import type { CreateGameInput } from '../../../types/GraphQL';
import type { CreateGameSubmitActionCreator } from '../../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    createGameSubmit: CreateGameSubmitActionCreator,
    computedMatch: {
        params: {
            worldId: string
        }
    },
    history: RouterHistory,
    game?: GameType
};

export default class Game extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        if (this.props.game) {
            this.props.history.push(this.getUp());
        }
    }

    handleSubmit = async (game: CreateGameInput) => {
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

    getUp() {
        const {computedMatch: {params: {worldId}}} = this.props;

        return `/worlds/${ worldId }`;
    }

    render() {
        const header = {
            menu: {
                up: this.getUp()
            }
        };

        return (
            <Page title='Game Admin' className='admin new-game' header={ header }>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        Add a new game
                    </Header>
                    <Form form='new-game' onSubmit={ this.handleSubmit }></Form>
                </Fragment>
            </Page>
        );
    }
}
