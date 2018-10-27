import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Page from "../containers/Page";
import SignUpForm from '../containers/forms/SignUp';
import {
    Grid,
    Header,
    Image,
    Message
} from 'semantic-ui-react';
import logo from '../assets/logo.png';

import type { User, UnconfirmedUser } from '../types/User';
import type { SignUpAction } from '../types/Action';
type Props = {
    signUp: (user: User) => SignUpAction,
    currentUnconfirmedUser?: UnconfirmedUser
}

export default class SignUp extends Component<Props> {
    handleSubmit = (user: User) => {
        this.props.signUp(user);
    }

    render() {
        if (this.props.currentUnconfirmedUser) {
            return ( <Redirect to={'/sign-up-validation'} /> );
        }
        return (
            <Page id="SignUp" description="Role sign up">
                <Grid centered textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='wrapper'>
                        <Header as='h2' color='black' textAlign='center' inverted>
                            <Image src={logo} /> Create a new account
                        </Header>
                        <SignUpForm onSubmit={ this.handleSubmit }/>
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
