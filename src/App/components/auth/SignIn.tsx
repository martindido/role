import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { Grid, Header, Image, Message } from 'semantic-ui-react';

import SignInForm from '../../containers/forms/auth/SignIn';
import Page from '../../containers/pages/Page';
import logo from '../../images/logo.png';
import { SignInFormData } from '../../types/Form/Auth/SignIn';
import { SignInProps } from '../../types/Props/Auth/SignIn';
import { AuthenticateSync } from '../../types/Sync';

export default class SignIn extends Component<SignInProps> {
    handleSubmit = async (signInFormData: SignInFormData) => {
        try {
            await this.signIn(signInFormData);
            await this.authenticate();
            this.props.history.push('/');
        } catch (error) {
            throw new SubmissionError({
                _error: error.message
            });
        }
    }

    signIn = async (signInFormData: SignInFormData) => {
        return await new Promise((resolve, reject) => {
            this.props.signInSync(signInFormData, {
                onSuccess: resolve,
                onError: reject
            });
        });
    }

    authenticate = async (payload: AuthenticateSync = {}) => {
        return await new Promise((resolve, reject) => {
            this.props.authenticateSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    }

    render() {
        return (
            <Page id='SignIn' description='Role sign in' withHeader={false}>
                <Grid centered textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='wrapper'>
                        <Header as='h2' color='black' textAlign='center' inverted>
                            <Image src={logo} /> Login to your account
                        </Header>
                        <SignInForm onSubmit={this.handleSubmit} />
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
