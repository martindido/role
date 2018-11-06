import React from 'react';
import Page from '../containers/Page';
import * as Spinners from 'react-epic-spinners';
import { Grid } from 'semantic-ui-react';

import '../styles/Loading.css';

import type { LoadingProps } from 'react-loadable';

const keys = Object.keys(Spinners);
const randomKey = keys[Math.floor(Math.random() * keys.length)];
const RandomSpinner = Spinners[randomKey];

export default function(props: LoadingProps) {
    if (!props.pastDelay) {
        return null;
    }
    return (
        <Page id="Loading" className="loading" title="Loading..." description="This is about really cool stuff.">
            <Grid verticalAlign='middle'>
                <Grid.Column>
                    <RandomSpinner className='spinner' color='white' size={ 200 }/>
                </Grid.Column>
            </Grid>
        </Page>
    );
}
