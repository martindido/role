import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from "../containers/Page";
import SignUpForm from '../containers/forms/SignUp';
import {
    Grid,
    Header,
    Image,
    Message
} from 'semantic-ui-react';
import logo from '../assets/logo.png';

import type { User } from '../types/User';
import type { SignUpAction } from '../types/Action';
type Props = {|
    signUp: (user: User) => SignUpAction
|}

export default class SignUp extends Component<Props> {
    handleSubmit(test) {
        console.log(test);
    }

    render() {
        return (
            <Page id="SignUp" description="Role registration">
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
