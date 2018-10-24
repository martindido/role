import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Section } from '../../styles';
import { Logo, Link } from '../../styles/Home';

import type { Props } from '../../../types';

export default class Home extends Component<Props> {
    render() {
        return (
            <Container className="Home">
                <Section className="Home-section">
                    <Logo src={logo} className="Home-logo" alt="logo" />
                    <Link className="Home-link" href="/counter">
                        Go to counter
                    </Link>
                </Section>
            </Container>
        );
    }
}
