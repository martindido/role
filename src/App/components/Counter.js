import React, { Component } from 'react';

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
            <div className="Counter">
                <section className="Counter-section">
                    <div>{this.props.counter}</div>
                    <div>
                        <button key="increment" onClick={() => this.props.increment(1)}>
                            +
                        </button>
                        <button key="decrement" onClick={() => this.props.decrement(1)}>
                            -
                        </button>
                    </div>
                    <a className="Counter-link" href="/">
                        Back to home
                    </a>
                </section>
            </div>
        );
    }
}
