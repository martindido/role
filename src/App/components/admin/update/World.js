import React, { Component, Fragment } from 'react';
import Page from '../../../containers/pages/Page';
import Form from '../../../containers/forms/admin/World';
import { Header } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';

import type { World as WorldType } from '../../../types/World';
import type { UpdateWorldSyncActionCreator } from '../../../types/ActionCreator';
import type { UpdateWorldSync } from '../../../types/Sync';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    updateWorldSync: UpdateWorldSyncActionCreator,
    computedMatch: {
        params: {
            worldId: string
        }
    },
    history: RouterHistory,
    isNotFound: boolean,
    world?: WorldType,
    translate: Function
};

export default class World extends Component<Props> {
    handleSubmit = async (payload: UpdateWorldSync) => {
        try {
            await this.updateWorld(payload);
            this.props.history.push(this.getUp());
        } catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    };

    updateWorld = async (payload: UpdateWorldSync) => {
        return await new Promise((resolve, reject) => {
            this.props.updateWorldSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    };

    getUp() {
        const {
            computedMatch: {
                params: { worldId }
            },
            isNotFound
        } = this.props;

        return isNotFound ? '/' : `/worlds/${worldId}`;
    }

    render() {
        const { translate, world } = this.props;
        const header = {
            menu: {
                up: this.getUp()
            }
        };

        return (
            <Page title='World Admin' className='admin new-world' header={header}>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        {translate('forms.update')} {world ? world.name : translate('world')}
                    </Header>
                    <Form form='edit-world' onSubmit={this.handleSubmit} />
                </Fragment>
            </Page>
        );
    }
}
