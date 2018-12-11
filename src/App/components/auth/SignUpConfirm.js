import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Page from '../../containers/pages/Page';
import SignUpConfirmForm from '../../containers/forms/auth/SignUpConfirm';
import {
    Grid,
    Header,
    Image,
    Message
} from 'semantic-ui-react';
import logo from '../../images/logo.png';

import type { UnconfirmedUser } from '../../types/User';
import type {
    SignUpConfirmData
} from '../../types/Auth';
import type { SignUpConfirmActionCreator, UnsetCurrentUnconfirmedUserActionCreator } from '../../types/ActionCreator';

type Props = {
    signUpConfirm: SignUpConfirmActionCreator,
    unsetCurrentUnconfirmedUser: UnsetCurrentUnconfirmedUserActionCreator,
    currentUnconfirmedUser: UnconfirmedUser
}

export default class SignUpConfirm extends Component<Props> {
    componentWillUnmount() {
        this.props.unsetCurrentUnconfirmedUser();
    }

    handleSubmit = (confirmation: SignUpConfirmData) => {
        this.props.signUpConfirm({
            ...this.props.currentUnconfirmedUser,
            ...confirmation
        });
    }

    render() {
        if (!this.props.currentUnconfirmedUser) {
            return (<Redirect to={ '/sign-up' }/>);
        }
        return (
            <Page id='SignUpConfirm' description='Role sign up confirmation' withHeader={ false }>
                <Grid centered textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='wrapper'>
                        <Header as='h2' color='black' textAlign='center' inverted>
                            <Image src={ logo }/> Validate your account
                        </Header>
                        <SignUpConfirmForm onSubmit={ this.handleSubmit }/>
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
