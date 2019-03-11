import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import * as validations from '../../../utils/validations';

import type { FormProps } from 'redux-form';

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
                    validate={[validations.isRequired, validations.isValidCode]}
                />
                <Form.Button fluid size='massive' inverted>
                    Validate
                </Form.Button>
                {error ? <Message error content={error} /> : null}
            </Form>
        );
    }
}
