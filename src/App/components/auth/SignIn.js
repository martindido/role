import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../containers/pages/Page';
import SignInForm from '../../containers/forms/auth/SignIn';
import { Grid, Header, Image, Message } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import logo from '../../images/logo.png';

import type { Credentials } from '../../types/Auth';
import type { SignInSync, AuthenticateSync } from '../../types/Sync';
import type { SignInSyncActionCreator, AuthenticateSyncActionCreator } from '../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

type Props = {
    signInSync: SignInSyncActionCreator,
    authenticateSync: AuthenticateSyncActionCreator,
    history: RouterHistory
};

export default class SignIn extends Component<Props> {
    handleSubmit = async (credentials: Credentials) => {
        try {
            await this.signIn({
                credentials
            });
            await this.authenticate();
            this.props.history.push('/');
        } catch (error) {
            throw new SubmissionError({
                _error: error.message
            });
        }
    };

    signIn = async (payload: SignInSync) => {
        return await new Promise((resolve, reject) => {
            this.props.signInSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    };

    authenticate = async (payload?: AuthenticateSync = {}) => {
        return await new Promise((resolve, reject) => {
            this.props.authenticateSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    };

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
