import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form';

import type { FormProps } from 'redux-form'

export default class SignUp extends Component<FormProps> {
    render() {
        return (
            <Form size='large' onSubmit={ this.props.handleSubmit }>
                <Field component={ Form.Input } name='email' fluid icon='mail' iconPosition='left' placeholder='Email' type='email' />
                <Field component={ Form.Input } name='username' fluid icon='user' iconPosition='left' placeholder='Username' />
                <Field component={ Form.Input } name='password' fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                <Form.Button fluid size='massive' inverted>Sign Up</Form.Button>
            </Form>
        );
    }
}
