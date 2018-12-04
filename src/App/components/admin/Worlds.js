import React, { Component } from 'react';
import Page from '../../containers/pages/Page';
import Header from '../../containers/Header';
import WorldsForm from '../../containers/forms/admin/Worlds';
import { Redirect } from 'react-router-dom';
import {
    Segment,
    Header as FormHeader
} from 'semantic-ui-react';

import type { CreateWorldInput } from '../../types/GraphQL';
import type { SetLoadingAction, CreateWorldAction } from '../../types/Action';
import type { Submit } from '../../types/Submit';
export type Props = {
    setLoading: boolean => SetLoadingAction,
    createWorld: CreateWorldInput => CreateWorldAction,
    isLoading: boolean
} & Submit;

export default class Worlds extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        const hasFormChanged = prevProps.success !== this.props.success || prevProps.errors !== this.props.errors;

        if (hasFormChanged && this.props.isLoading) {
            this.props.setLoading(false);
        }
    }

    handleSubmit = (world: CreateWorldInput) => {
        this.props.setLoading(true);
        this.props.createWorld(world);
    }

    render() {
        const { isLoading, success } = this.props;

        if (!isLoading && success) {
            return ( <Redirect to={ '/' } /> );
        }
        return (
            <Page id='admin-Worlds' title='Admin Worlds'>
                <Header/>
                <Segment basic>
                    <FormHeader as='h2' color='black' textAlign='center' inverted>
                        Add a new World
                    </FormHeader>
                    <WorldsForm onSubmit={ this.handleSubmit } />
                </Segment>
            </Page>
        );
    }
}
