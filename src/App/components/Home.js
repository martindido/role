import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Page from "../containers/Page";
import { Grid, Button, Image } from 'semantic-ui-react';

import '../styles/Home.css';

type Props = {};

export default class Home extends Component<Props> {
    render() {
        return (
            <Page id="Home">
                <Grid container centered textAlign="center" verticalAlign='middle' columns={1}>
                    <Grid.Row centered columns={1}>
                        <Image src={logo} id="Logo" alt="logo" wrapped spaced/>
                    </Grid.Row>
                    <Grid.Row centered columns={2}>
                        <Grid.Column textAlign="center" verticalAlign='middle'>
                            <Button as={Link} to="/login" secondary fluid>
                                Login
                            </Button>
                        </Grid.Column>
                        <Grid.Column  textAlign="center" verticalAlign='middle'>
                            <Button as={Link} to="/register" secondary fluid>
                                Register
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Page>
        );
    }
}
