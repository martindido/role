import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Page from '../../containers/pages/Page';
import SignUpConfirmForm from '../../containers/forms/auth/SignUpConfirm';
import { Grid, Header, Image, Message } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import logo from '../../images/logo.png';

import type { User } from '../../types/User';
import type { Confirmation } from '../../types/Auth';
import type {
    SignUpConfirmSyncActionCreator,
    UnsetCurrentUnconfirmedUserActionCreator
} from '../../types/ActionCreator';
import type { SignUpConfirmSync } from '../../types/Sync';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    signUpConfirmSync: SignUpConfirmSyncActionCreator,
    unsetCurrentUnconfirmedUser: UnsetCurrentUnconfirmedUserActionCreator,
    currentUnconfirmedUser: User,
    history: RouterHistory
};

export default class SignUpConfirm extends Component<Props> {
    componentWillUnmount() {
        this.props.unsetCurrentUnconfirmedUser();
    }

    handleSubmit = async (confirmation: Confirmation) => {
        try {
            await this.signUpConfirm({
                user: this.props.currentUnconfirmedUser,
                confirmation
            });
            this.props.history.push('/sign-in');
        } catch (error) {
            throw new SubmissionError({
                _error: error.message
            });
        }
    };

    signUpConfirm = async (payload: SignUpConfirmSync) => {
        return await new Promise((resolve, reject) => {
            this.props.signUpConfirmSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    };

    render() {
        if (!this.props.currentUnconfirmedUser) {
            return <Redirect to={'/sign-up'} />;
        }
        return (
            <Page id='SignUpConfirm' description='Role sign up confirmation' withHeader={false}>
                <Grid centered textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='wrapper'>
                        <Header as='h2' color='black' textAlign='center' inverted>
                            <Image src={logo} /> Validate your account
                        </Header>
                        <SignUpConfirmForm onSubmit={this.handleSubmit} />
                        <Message>
                            <Message.Header>Don't have a validation code?</Message.Header>
                            Check your email or <Link to='/sign-up'>Sign Up</Link> again
                        </Message>
                    </Grid.Column>
                </Grid>
            </Page>
        );
    }
}
