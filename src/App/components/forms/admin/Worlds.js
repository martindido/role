import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form';

import type { FormProps } from 'redux-form'
export type Props = {
    isLoading: boolean
} & FormProps;

export default class Worlds extends Component<Props> {
    render() {
        return (
            <Form size='large' onSubmit={ this.props.handleSubmit } inverted>
                <Field component={ Form.Input } name='name' fluid placeholder='Name' label='Name' />
                <Field component={ Form.Input } name='path' fluid placeholder='Path' label='Path' />
                <Form.Button fluid size='massive' inverted>Submit</Form.Button>
            </Form>
        );
    }
}
