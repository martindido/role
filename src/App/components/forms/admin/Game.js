import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Field } from 'redux-form';

import '../../../styles/Form.css';

import type { FormProps } from 'redux-form';

export default class Games extends Component<FormProps> {
    render() {
        const {handleSubmit, submitting, invalid, error} = this.props;

        return (
            <Form inverted size='large' onSubmit={ handleSubmit } loading={ submitting } error={ invalid }>
                <Field
                    fluid
                    component={ Form.Input }
                    name='name'
                    placeholder='Name'
                    label='Name'
                />
                <Field
                    fluid
                    component={ Form.Input }
                    name='path'
                    placeholder='Path'
                    label='Path'
                />
                <Form.Button fluid size='massive' inverted>Submit</Form.Button>
                { error ? (
                    <Message
                        error
                        content={ error }
                    />
                ) : null }
            </Form>
        );
    }
}
