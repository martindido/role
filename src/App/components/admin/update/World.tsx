import React, { Component, Fragment } from 'react';
import { SubmissionError } from 'redux-form';
import { Header } from 'semantic-ui-react';

import Form from '../../../containers/forms/admin/World';
import Page from '../../../containers/pages/Page';
import { UpdateWorldFormData, WorldAdminFormData } from '../../../types/Form/Admin/World';
import { WorldUpdateAdminProps } from '../../../types/Props/Admin/Update/World';
import { HeaderConfigProps } from '../../../types/Props/Header/Header';

export default class WorldUpdateAdmin extends Component<WorldUpdateAdminProps> {
    private static headerConfig(up: string): HeaderConfigProps {
        return {
            menu: {
                up
            }
        };
    }

    handleSubmit = async (payload: WorldAdminFormData) => {
        try {
            await this.updateWorld(payload as UpdateWorldFormData);
            this.props.history.push(this.getUp());
        } catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    }

    updateWorld = async (payload: UpdateWorldFormData) => {
        return await new Promise((resolve, reject) => {
            this.props.updateWorldSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    }

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
        const header = WorldUpdateAdmin.headerConfig(this.getUp());

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
