import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';

import type { FormProps } from 'redux-form';

const isRequired = value => (value || typeof value === 'number' ? undefined : 'Required');
const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const isValidEmail = value => (rEmail.test(String(value)) ? undefined : 'Must be a valid email address');
const rPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*().,:;"'<>_-])/;
const isValidPassword = value =>
    rPassword.test(String(value))
        ? undefined
        : 'Must have at least 1 lowecase, 1 uppercase, 1 numeric and 1 special character';
const hasMinLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const hasMinLength8 = hasMinLength(8);

export default class SignUp extends Component<FormProps> {
    render() {
        const { handleSubmit, submitting, invalid, error } = this.props;

        return (
            <Form size='large' onSubmit={handleSubmit} loading={submitting} error={invalid}>
                <Field
                    component={InputField}
                    name='email'
                    fluid
                    icon='mail'
                    iconPosition='left'
                    placeholder='Email'
                    type='email'
                    validate={[isRequired, isValidEmail]}
                />
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
                    validate={[isRequired, hasMinLength8, isValidPassword]}
                />
                <Form.Button fluid size='massive' inverted>
                    Sign Up
                </Form.Button>
                {error ? <Message error content={error} /> : null}
            </Form>
        );
    }
}
