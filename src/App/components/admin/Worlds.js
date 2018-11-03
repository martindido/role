import React, { Component } from 'react';
import Page from "../../containers/Page";
import Header from "../../containers/Header";
import WorldsForm from '../../containers/forms/admin/Worlds';
import {
    Segment,
    Header as FormHeader
} from "semantic-ui-react";

import type { CreateWorldInput } from "../../types/GraphQL";
export type Props = {};

export default class Worlds extends Component<Props> {
    handleSubmit = (world: CreateWorldInput) => {
        console.log(world);
    }

    render() {
        return (
            <Page id="admin-Worlds" title="Admin Worlds">
                <Header/>
                <Segment basic>
                    <FormHeader as='h2' color='black' textAlign='center' inverted>
                        Add a new World
                    </FormHeader>
                    <WorldsForm onSubmit={ this.handleSubmit }/>
                </Segment>
            </Page>
        );
    }
}
