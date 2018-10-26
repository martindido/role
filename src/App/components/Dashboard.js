import React, { Component } from 'react';
import Page from "../containers/Page";
import { Paragraph } from "../styles";

import type { User } from "../types/User";
type Props = {
    currentUser: User
};

export default class Home extends Component<Props> {
    render() {
        const { currentUser } = this.props;

        return (
            <Page id="Dashboard" className="dashboard" title="Dashboard" noCrawl>
                <Paragraph>
                    We have a secret dashboard that only cool kids can access.<br />Notice
                    that refreshing this page will retain the logged in status!
                </Paragraph>
                <Paragraph>
                    <b>Name:</b> { currentUser.name }
                </Paragraph>
                <Paragraph>
                    <b>Email:</b> { currentUser.email }
                </Paragraph>
                <Paragraph>
                    <b>Password:</b> { currentUser.password }
                </Paragraph>
            </Page>
        );
    }
}
