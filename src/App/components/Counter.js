import React, { Component } from 'react';

import { Container, Section, Link } from '../styles/index';
import { Count, Actions, Button } from '../styles/Counter';

import type { Action } from '../types/Action';
type Props = {|
    counter: number,
    increment: (amount: number) => Action,
    decrement: (amount: number) => Action,
    completeUpdate: (amount: number) => Action
|}

export default class Counter extends Component<Props> {
    render() {
        return (
            <Container className="Counter">
                <Section className="Counter-section">
                    <Count>{this.props.counter}</Count>
                    <Actions>
                        <Button key="increment" onClick={() => this.props.increment(1)}>
                            +
                        </Button>
                        <Button key="decrement" onClick={() => this.props.decrement(1)}>
                            -
                        </Button>
                    </Actions>
                    <Link className="Counter-link" href="/">
                        Back to home
                    </Link>
                </Section>
            </Container>
        );
    }
}
