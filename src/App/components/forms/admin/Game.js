import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Field } from 'redux-form';
import slugify from 'slugify';

import '../../../styles/Form.css';

import type { FormProps } from 'redux-form';

export default class Game extends Component<FormProps> {
    handleChangeName = (event: Object, newName: string) => {
        this.props.change('path', slugify(newName));
    }

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
                    onChange={ this.handleChangeName }
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
