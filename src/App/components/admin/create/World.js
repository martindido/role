import React, { Component, Fragment } from 'react';
import Page from '../../../containers/pages/Page';
import Form from '../../../containers/forms/admin/World';
import { Header } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';

import type { World as WorldType } from '../../../types/World';
import type { CreateWorldSubmit } from '../../../types/Submit';
import type { CreateWorldSubmitActionCreator } from '../../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    createWorldSubmit: CreateWorldSubmitActionCreator,
    history: RouterHistory,
    world?: WorldType
};

export default class World extends Component<Props> {
    handleSubmit = async (submit: CreateWorldSubmit) => {
        try {
            const world = await this.createWorld(submit);

            this.props.history.push(`/worlds/${ world.id }`);
        }
        catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    }

    createWorld = async (submit: CreateWorldSubmit) => {
        return await new Promise((resolve, reject) => {
            this.props.createWorldSubmit(submit, {
                onSuccess: resolve,
                onError: reject
            });
        });
    }

    render() {
        const header = {
            menu: {
                up: '/'
            }
        };

        return (
            <Page title='World Admin' className='admin new-world' header={ header }>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        Add a new world
                    </Header>
                    <Form form='new-world' onSubmit={ this.handleSubmit }></Form>
                </Fragment>
            </Page>
        );
    }
}
