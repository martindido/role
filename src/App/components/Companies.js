import React, { Component } from 'react';
import Page from "../containers/Page";
import Header from "../containers/Header";

type Props = {};

export default class Companies extends Component<Props> {
    render() {
        return (
            <Page id="Dashboard" className="dashboard" title="Dashboard" noCrawl>
                <Header/>
            </Page>
        );
    }
}
