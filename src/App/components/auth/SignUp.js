import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Page from '../../containers/pages/Page';
import SignUpForm from '../../containers/forms/auth/SignUp';
import { Grid, Header, Image, Message } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import logo from '../../images/logo.png';

import type { User } from '../../types/User';
import type { Credentials } from '../../types/Auth';
import type { SignUpSync } from '../../types/Sync';
import type { SignUpSyncActionCreator, SetCurrentUnconfirmedUserActionCreator } from '../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

type Props = {
    signUpSync: SignUpSyncActionCreator,
    setCurrentUnconfirmedUser: SetCurrentUnconfirmedUserActionCreator,
    currentUnconfirmedUser?: User,
    history: RouterHistory
};

export default class SignUp extends Component<Props> {
    handleSubmit = async (credentials: Credentials) => {
        try {
            const user = await this.signUp({
                credentials
            });

            this.props.setCurrentUnconfirmedUser(user);
            this.props.history.push(`/sign-up-confirm`);
        } catch (error) {
            throw new SubmissionError({
                _error: error.message
            });
        }
    };

    signUp = async (payload: SignUpSync) => {
        return await new Promise((resolve, reject) => {
            this.props.signUpSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    };

    render() {
        if (this.props.currentUnconfirmedUser) {
            return <Redirect to={'/sign-up-confirm'} />;
        }
        return (
            <Page id='SignUp' description='Role sign up' withHeader={false}>
                <Grid centered textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='wrapper'>
                        <Header as='h2' color='black' textAlign='center' inverted>
                            <Image src={logo} /> Create a new account
                        </Header>
                        <SignUpForm onSubmit={this.handleSubmit} />
                        <Message>
                            <Message.Header>Already have an account?</Message.Header>
                            <Link to='/sign-in'>Sign In</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Page>
        );
    }
}
