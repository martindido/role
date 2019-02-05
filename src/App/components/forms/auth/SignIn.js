import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';

import type { FormProps } from 'redux-form';

const isRequired = value => (value || typeof value === 'number' ? undefined : 'Required');

export default class SignIn extends Component<FormProps> {
    render() {
        const { handleSubmit, submitting, invalid, error } = this.props;

        return (
            <Form size='large' onSubmit={handleSubmit} loading={submitting} error={invalid}>
                <Field
                    component={InputField}
                    name='username'
                    fluid
                    icon='at'
                    iconPosition='left'
                    placeholder='Username'
                    validate={[isRequired]}
                />
                <Field
                    component={InputField}
                    name='password'
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    validate={[isRequired]}
                />
                <Form.Button fluid size='massive' inverted>
                    Sign In
                </Form.Button>
                {error ? <Message error content={error} /> : null}
            </Form>
        );
    }
}
