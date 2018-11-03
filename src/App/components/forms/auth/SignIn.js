import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form';

import type { FormProps } from 'redux-form'

export default class SignIn extends Component<FormProps> {
    render() {
        return (
            <Form size='large' onSubmit={ this.props.handleSubmit }>
                <Field component={ Form.Input } name='username' fluid icon='at' iconPosition='left' placeholder='Username or Email' />
                <Field component={ Form.Input } name='password' fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                <Form.Button fluid size='massive' inverted>Sign In</Form.Button>
            </Form>
        );
    }
}
