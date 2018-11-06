import React, { Component } from 'react';
import Page from '../containers/Page';
import * as Spinners from 'react-epic-spinners';
import { Grid } from 'semantic-ui-react';

import '../styles/Loading.css';

const spinners = Object.keys(Spinners);
const random = Math.floor(Math.random() * spinners.length);
const spinner = spinners[random];
const Spinner = Spinners[spinner];

export type Props = {
    pastDelay?: boolean
};

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
                <Grid verticalAlign='middle'>
                    <Grid.Column>
                        <Spinner className='spinner' color='white' size={ 200 }/>
                    </Grid.Column>
                </Grid>
            </Page>
        );
    }
}
