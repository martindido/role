import React, { Component, Fragment } from 'react';
import Page from '../../../containers/pages/Page';
import Form from '../../../containers/forms/admin/World';
import { Header } from 'semantic-ui-react';

import type { World as WorldType } from '../../../types/World';
import type { CreateWorldInput } from '../../../types/GraphQL';
import type { CreateWorldSubmitActionCreator } from '../../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    createWorldSubmit: CreateWorldSubmitActionCreator,
    history: RouterHistory,
    isNotFound: boolean,
    world?: WorldType
};

export default class World extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        if (this.props.world) {
            this.props.history.push(this.getUp());
        }
    }

    handleSubmit = async (world: CreateWorldInput) => {
        try {
            await new Promise((resolve, reject) => {
                this.props.createWorldSubmit(world, {
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
        return '/';
    }

    render() {
        const header = {
            menu: {
                up: this.getUp()
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
