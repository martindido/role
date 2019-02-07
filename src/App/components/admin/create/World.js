import React, { Component, Fragment } from 'react';
import Page from '../../../containers/pages/Page';
import Form from '../../../containers/forms/admin/World';
import { Header } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';

import type { World as WorldType } from '../../../types/World';
import type { CreateWorldSync } from '../../../types/Sync';
import type { CreateWorldSyncActionCreator } from '../../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    createWorldSync: CreateWorldSyncActionCreator,
    history: RouterHistory,
    world?: WorldType,
    translate: Function
};

export default class World extends Component<Props> {
    handleSubmit = async (payload: CreateWorldSync) => {
        try {
            const world = await this.createWorld(payload);

            this.props.history.push(`/worlds/${world.id}`);
        } catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    };

    createWorld = async (payload: CreateWorldSync) => {
        return await new Promise((resolve, reject) => {
            this.props.createWorldSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    };

    render() {
        const { translate } = this.props;
        const header = {
            menu: {
                up: '/'
            }
        };

        return (
            <Page title='World Admin' className='admin new-world' header={header}>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        {translate('forms.create')} {translate('world')}
                    </Header>
                    <Form form='new-world' onSubmit={this.handleSubmit} />
                </Fragment>
            </Page>
        );
    }
}
