import React, { Component, Fragment } from 'react';
import { SubmissionError } from 'redux-form';
import { Header } from 'semantic-ui-react';

import Form from '../../../containers/forms/admin/World';
import Page from '../../../containers/pages/Page';
import { CreateWorldFormData, WorldAdminFormData } from '../../../types/Form/Admin/World';
import { WorldCreateAdminProps } from '../../../types/Props/Admin/Create/World';
import { HeaderConfigProps } from '../../../types/Props/Header/Header';
import { World } from '../../../types/World';

export default class WorldCreateAdmin extends Component<WorldCreateAdminProps> {
    private static headerConfig: HeaderConfigProps = {
        menu: {
            up: '/'
        }
    };

    handleSubmit = async (payload: WorldAdminFormData) => {
        try {
            const world = await this.createWorld(payload as CreateWorldFormData);

            this.props.history.push(`/worlds/${world.id}`);
        } catch (err) {
            throw new SubmissionError({
                _error: 'An unexpected error occurred'
            });
        }
    }

    createWorld = async (payload: CreateWorldFormData) => {
        return await new Promise<World>((resolve, reject) => {
            this.props.createWorldSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    }

    render() {
        const { translate } = this.props;

        return (
            <Page title='World Admin' className='admin new-world' header={WorldCreateAdmin.headerConfig}>
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
