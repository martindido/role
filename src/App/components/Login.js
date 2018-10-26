import React, { Component } from 'react';
import Page from "../containers/Page";

import { Section } from '../styles/index';
import { Actions, Button } from '../styles/Counter';

import type { User } from '../types/User';
import type { LoginAction } from '../types/Action';
type Props = {|
    login: (user: User) => LoginAction
|}

export default class Login extends Component<Props> {
    render() {
        return (
            <Page id="Login" className="login" description="We need to log in to stuff.">
                <Section className="Counter-section">
                    <Actions>
                        <Button key="login" onClick={() => this.props.login({
                            email: 'martindido87@gmail.com',
                            password: '123123123',
                            name: 'Tincho'
                        })}>
                            Click the button...
                        </Button>
                    </Actions>
                </Section>
            </Page>
        );
    }
}
