import React, { Component } from 'react';
import { Form, Message, Segment, Image } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { InputField, UploadField } from 'react-semantic-redux-form';
import slugify from 'slugify';
import mime from 'mime-types';

import '../../../styles/Form.css';
import type { FormProps } from 'redux-form';
import type { File } from '../../../types/Storage';

export default class Game extends Component<FormProps> {
    handleChangeName = (event: Object, newName: string) => {
        const slug = slugify(newName);

        this.props.change('game[slug]', slug);
    };

    handleChangeLogo = (event: Object, newLogo: File) => {
        this.props.change('game[logo]', {
            name: newLogo.name,
            size: newLogo.size,
            type: newLogo.type,
            extension: mime.extension(newLogo.type) || 'png'
        });
    };

    normalizeLogoFile = (value: string) => {
        return value[0];
    };

    render() {
        const { handleSubmit, submitting, invalid, error, game, selectedValues } = this.props;

        return (
            <Form inverted size='large' onSubmit={handleSubmit} loading={submitting} error={invalid}>
                <Field
                    fluid
                    component={InputField}
                    name='game[name]'
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
                    normalize={this.normalizeLogoFile}
                />
                {game && !selectedValues.logo ? (
                    <Segment inverted>
                        <Image src={game.logo.src} size='tiny' centered />
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
