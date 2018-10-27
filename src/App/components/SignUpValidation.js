import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Page from "../containers/Page";
import SignUpValidationForm from '../containers/forms/SignUpValidation';
import {
    Grid,
    Header,
    Image,
    Message
} from 'semantic-ui-react';
import logo from '../assets/logo.png';

import type { UnconfirmedUser } from '../types/User';
import type {
    SignUpValidateAction,
    UnsetCurrentUnconfirmedUserAction
} from '../types/Action';
import type {
    SignUpValidation as SignUpValidationType,
    SignUpValidationData
} from '../types/Validations';
type Props = {
    signUpValidate: SignUpValidationType => SignUpValidateAction,
    unsetCurrentUnconfirmedUser: () => UnsetCurrentUnconfirmedUserAction,
    currentUnconfirmedUser: UnconfirmedUser
}

export default class SignUpValidation extends Component<Props> {
    componentWillUnmount() {
        this.props.unsetCurrentUnconfirmedUser();
    }

    handleSubmit = (validation: SignUpValidationData) => {
        this.props.signUpValidate({
            ...this.props.currentUnconfirmedUser,
            ...validation
        });
    }

    render() {
        if (!this.props.currentUnconfirmedUser) {
            return ( <Redirect to={'/sign-up'} /> );
        }
        return (
            <Page id="SignUpValidation" description="Role sign up validation">
                <Grid centered textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='wrapper'>
                        <Header as='h2' color='black' textAlign='center' inverted>
                            <Image src={logo} /> Validate your account
                        </Header>
                        <SignUpValidationForm onSubmit={ this.handleSubmit }/>
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
