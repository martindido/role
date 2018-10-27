import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Page from "../containers/Page";
import {
    Grid,
    Form,
    Button,
    Header,
    Image,
    Message
} from 'semantic-ui-react';
import logo from "../assets/logo.png";

import type { User } from '../types/User';
import type { SignInAction } from '../types/Action';
type Props = {|
    signIn: (user: User) => SignInAction
|}

export default class SignIn extends Component<Props> {
    render() {
        return (
            <Page id="SignIn" description="Role registration">
                <Grid centered textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='wrapper'>
                        <Header as='h2' color='black' textAlign='center' inverted>
                            <Image src={logo} /> Login to your account
                        </Header>
                        <Form size='large'>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username or Email' />
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                            <Button fluid size='massive' inverted>Sign In</Button>
                        </Form>
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
