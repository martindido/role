import React, { Component } from 'react';
import Page from "../containers/Page";

type Props = {};

export default class Home extends Component<Props> {
    render() {
        return (
            <Page id="About" title="About" description="This is about really cool stuff.">
                <p>What we're all about</p>
            </Page>
        );
    }
}
