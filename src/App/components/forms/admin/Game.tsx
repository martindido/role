import mime from 'mime-types';
import React, { ChangeEvent, Component } from 'react';
import { InputField, UploadField } from 'react-semantic-redux-form';
import { Field } from 'redux-form';
import { Form, Image, Message, Segment } from 'semantic-ui-react';

import '../../../styles/Form.css';
import { GameAdminFormProps } from '../../../types/Form/Admin/Game';
import { File } from '../../../types/Storage';
import { slugify } from '../../../utils';
import { isRequired } from '../../../utils/validations';

export default class GameAdminForm extends Component<GameAdminFormProps> {
    handleChangeName = (event: ChangeEvent<Field> | undefined, newName: string) => {
        this.props.change('game[slug]', slugify(newName));
    }

    handleChangeLogo = (event: ChangeEvent<Field> | undefined, newLogo: File) => {
        this.props.change('game[logo]', {
            name: newLogo.name,
            size: newLogo.size,
            type: newLogo.type,
            extension: mime.extension(newLogo.type) || 'png'
        });
    }

    normalizeLogoFile = (value: string) => {
        return value[0];
    }

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
                    validate={[isRequired]}
                />
                <Field
                    fluid
                    component={UploadField}
                    name='logo'
                    label='Logo'
                    onChange={this.handleChangeLogo}
                    normalize={this.normalizeLogoFile}
                    validate={game ? [] : [isRequired]}
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
