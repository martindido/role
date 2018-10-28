import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Page from "../containers/Page";
import { Grid, Button, Image } from 'semantic-ui-react';

import '../styles/Home.css';

type Props = {};

export default class Home extends Component<Props> {
    render() {
        return (
            <Page id="Home">
                <Grid container textAlign='center' verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <Image src={logo} id="Logo" alt="logo" wrapped />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column verticalAlign='bottom'>
                            <Button.Group fluid size='massive'>
                                <Button as={Link} to="/sign-in" content='Sign In' inverted />
                                <Button.Or className='inverted' />
                                <Button as={Link} to="/sign-up" content='Sign Up' inverted />
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Page>
        );
    }
}
