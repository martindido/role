import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form';

import type { FormProps } from 'redux-form'

export default class SignUpValidation extends Component<FormProps> {
    render() {
        return (
            <Form size='large' onSubmit={ this.props.handleSubmit }>
                <Field component={ Form.Input } name='code' fluid icon='key' iconPosition='left' placeholder='Code' />
                <Form.Button fluid size='massive' inverted>Validate</Form.Button>
            </Form>
        );
    }
}
