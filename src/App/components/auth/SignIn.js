import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Page from "../../containers/pages/Page";
import SignInForm from '../../containers/forms/auth/SignIn';
import {
    Grid,
    Header,
    Image,
    Message
} from 'semantic-ui-react';
import logo from "../../images/logo.png";

import type { Credentials } from '../../types/Auth';
import type { SignInAction } from '../../types/Action';
type Props = {
    signIn: Credentials => SignInAction
}

export default class SignIn extends Component<Props> {
    handleSubmit = (credentials: Credentials) => {
        this.props.signIn(credentials);
    }

    render() {
        return (
            <Page id="SignIn" description="Role sign in">
                <Grid centered textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='wrapper'>
                        <Header as='h2' color='black' textAlign='center' inverted>
                            <Image src={ logo } /> Login to your account
                        </Header>
                        <SignInForm onSubmit={ this.handleSubmit }/>
                        <Message>
                            <Message.Header>Don't have an account?</Message.Header>
                            <Link to='/sign-up'>Sign Up</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Page>
        );
    }
}
