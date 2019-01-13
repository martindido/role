import React, { Component, Fragment } from 'react';
import Page from '../../../containers/pages/Page';
import Form from '../../../containers/forms/admin/World';
import { Header } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';

import type { World as WorldType } from '../../../types/World';
import type { UpdateWorldSubmitActionCreator } from '../../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';
import type { UpdateWorldSubmit } from '../../../types/Submit';


export type Props = {
    updateWorldSubmit: UpdateWorldSubmitActionCreator,
    computedMatch: {
        params: {
            worldId: string
        }
    },
    history: RouterHistory,
    isNotFound: boolean,
    world?: WorldType
};

export default class World extends Component<Props> {
    handleSubmit = async (submit: UpdateWorldSubmit) => {
        try {
            await this.updateWorld(submit);
            this.props.history.push(this.getUp());
        }
        catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    }

    updateWorld = async (submit: UpdateWorldSubmit) => {
        return await new Promise((resolve, reject) => {
            this.props.updateWorldSubmit(submit, {
                onSuccess: resolve,
                onError: reject
            });
        });
    }

    getUp() {
        const {computedMatch: {params: {worldId}}, isNotFound} = this.props;

        return isNotFound ? '/' : `/worlds/${ worldId }`;
    }

    render() {
        const {world} = this.props;
        const header = {
            menu: {
                up: this.getUp()
            }
        };

        return (
            <Page title='World Admin' className='admin new-world' header={ header }>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        { world ? `Edit ${ world.name }` : 'Edit world' }
                    </Header>
                    <Form form='edit-world' onSubmit={ this.handleSubmit }></Form>
                </Fragment>
            </Page>
        );
    }
}
