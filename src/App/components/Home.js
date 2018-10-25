import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Section } from '../styles/index';
import { Logo, Link } from '../styles/Home';
import Page from "../containers/Page";

type Props = {};

export default class Home extends Component<Props> {
    render() {
        return (
            <Page id="Home">
                <Section className="Home-section">
                    <Logo src={logo} className="Home-logo" alt="logo" />
                    <Link className="Home-link" href="/counter">
                        Go to counter
                    </Link>
                </Section>
            </Page>
        );
    }
}
