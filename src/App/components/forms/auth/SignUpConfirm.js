import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';

import type { FormProps } from 'redux-form';

const isRequired = value => (value || typeof value === 'number' ? undefined : 'Required');
const rCode = /^[0-9]{6}$/i;
const isValidCode = value => (rCode.test(String(value)) ? undefined : 'Must be a valid code');

export default class SignUpConfirm extends Component<FormProps> {
    render() {
        const { handleSubmit, submitting, invalid, error } = this.props;

        return (
            <Form size='large' onSubmit={handleSubmit} loading={submitting} error={invalid}>
                <Field
                    component={InputField}
                    name='code'
                    fluid
                    icon='key'
                    iconPosition='left'
                    placeholder='Code'
                    validate={[isRequired, isValidCode]}
                />
                <Form.Button fluid size='massive' inverted>
                    Validate
                </Form.Button>
                {error ? <Message error content={error} /> : null}
            </Form>
        );
    }
}
