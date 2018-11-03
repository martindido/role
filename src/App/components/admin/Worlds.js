import React, { Component } from 'react';
import Page from "../../containers/Page";
import Header from "../../containers/Header";
import {
    Segment,
    List,
    Image
} from "semantic-ui-react";

type Props = {};

export default class Worlds extends Component<Props> {
    render() {
        return (
            <Page id="admin-Worlds" title="Admin Worlds">
                <Header/>
                <Segment basic>

                </Segment>
            </Page>
        );
    }
}
