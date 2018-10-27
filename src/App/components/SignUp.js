import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from "../containers/Page";
import {
    Grid,
    Form,
    Button,
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
    render() {
        return (
            <Page id="SignUp" description="Role registration">
                <Grid centered textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='wrapper'>
                        <Header as='h2' color='black' textAlign='center' inverted>
                            <Image src={logo} /> Create a new account
                        </Header>
                        <Form size='large'>
                            <Form.Input fluid icon='mail' iconPosition='left' placeholder='email' type='email' />
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                            <Button fluid size='massive' inverted>Sign Up</Button>
                        </Form>
                        <Message>
                            <Message.Header>Already have an account?</Message.Header>
                            <Link to='/sign-in'>Sign In</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
                {/*<section className="Counter-section">*/}
                    {/*<div>*/}
                        {/*<button key="signUp" onClick={() => this.props.signUp({*/}
                            {/*email: 'martindido87@gmail.com',*/}
                            {/*password: '123123123',*/}
                            {/*name: 'Tincho'*/}
                        {/*})}>*/}
                            {/*Submit*/}
                        {/*</button>*/}
                    {/*</div>*/}
                {/*</section>*/}
            </Page>
        );
    }
}
