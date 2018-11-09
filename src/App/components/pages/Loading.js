import React, { Component } from 'react';
import Page from '../../containers/pages/Page';
import * as Spinners from 'react-epic-spinners';
import { Grid } from 'semantic-ui-react';

import '../../styles/Loading.css';

import type { Node } from 'react';
export type Props = {
    pastDelay?: boolean,
    children?: Node
};

const Spinner = getSpinner();

function getSpinner() {
    const spinners = filterSpinners(Object.keys(Spinners));
    const random = Math.floor(Math.random() * spinners.length);
    const spinner = spinners[random];

    return Spinners[spinner];
}

function filterSpinners(spinners) {
    const filteredSpinners = [
        'ScalingSquaresSpinner',
        'SwappingSquaresSpinner',
        'TrinityRingsSpinner'
    ];

    for (const spinner of filteredSpinners) {
        const index = spinners.indexOf(spinner);

        if (index !== -1) {
            spinners.splice(index, 1);
        }
    }
    return spinners;
}

export default class Loading extends Component<Props> {
    static defaultProps = {
        pastDelay: true
    }

    render() {
        if (!this.props.pastDelay) {
            return null;
        }
        return (
            <Page id="Loading" className="loading" title="Loading..." description="This is about really cool stuff.">
                { this.props.children }
                <Grid verticalAlign='middle'>
                    <Grid.Column>
                        <Spinner className='spinner' color='white' size={ 200 }/>
                    </Grid.Column>
                </Grid>
            </Page>
        );
    }
}
