import React, { Component } from 'react';
import { Form, Message, Image, Segment } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { InputField, UploadField } from 'react-semantic-redux-form';
import slugify from 'slugify';
import mime from 'mime-types';

import '../../../styles/Form.css';

import type { FormProps } from 'redux-form';
import type { File } from '../../../types/Storage';

export default class World extends Component<FormProps> {
    handleChangeName = (event: Object, newName: string) => {
        const slug = slugify(newName);

        this.props.change('world[slug]', slug);
    };

    handleChangeLogo = (event: Object, newLogo: File) => {
        this.props.change('world[logo]', {
            name: newLogo.name,
            size: newLogo.size,
            type: newLogo.type,
            extension: mime.extension(newLogo.type) || 'png'
        });
    };

    normalizeLogo = (value: string) => {
        return value[0];
    };

    render() {
        const { handleSubmit, submitting, invalid, error, world, selectedValues } = this.props;

        return (
            <Form inverted size='large' onSubmit={handleSubmit} loading={submitting} error={invalid}>
                <Field
                    fluid
                    component={InputField}
                    name='world[name]'
                    label='Name'
                    placeholder='Name'
                    onChange={this.handleChangeName}
                />
                <Field
                    fluid
                    component={UploadField}
                    name='logo'
                    label='Logo'
                    onChange={this.handleChangeLogo}
                    normalize={this.normalizeLogo}
                />
                {world && !selectedValues.logo ? (
                    <Segment inverted>
                        <Image src={world.logo.src} size='tiny' centered />
                    </Segment>
                ) : null}
                <Form.Button fluid size='massive' inverted>
                    Submit
                </Form.Button>
                {error ? <Message error content={error} /> : null}
            </Form>
        );
    }
}
