import React, { Component } from 'react';
import { InputField } from 'react-semantic-redux-form';
import { Field } from 'redux-form';
import { Form, Message } from 'semantic-ui-react';

import { SignInFormProps } from '../../../types/Form/Auth/SignIn';
import { isRequired } from '../../../utils/validations';

export default class SignInForm extends Component<SignInFormProps> {
    render() {
        const { handleSubmit, submitting, invalid, error } = this.props;

        return (
            <Form size='large' onSubmit={handleSubmit} loading={submitting} error={invalid}>
                <Field
                    component={InputField}
                    name='credentials[username]'
                    fluid
                    icon='at'
                    iconPosition='left'
                    placeholder='Username'
                    validate={[isRequired]}
                />
                <Field
                    component={InputField}
                    name='credentials[password]'
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
