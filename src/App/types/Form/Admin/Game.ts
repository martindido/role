import { InjectedFormProps } from 'redux-form';

import { Game } from '../../Game';
import { CreateGameInput, UpdateGameInput } from '../../GraphQL';
import { File } from '../../Storage';

export type GameAdminFormData = Readonly<{
    game: Partial<CreateGameInput>;
    logo: File;
}>;

export type CreateGameFormData = GameAdminFormData &
    Readonly<{
        game: CreateGameInput;
    }>;

export type UpdateGameFormData = Readonly<{
    game: UpdateGameInput;
    logo?: File;
}>;

export type GameAdminFormStateProps = Readonly<{
    game?: Game;
    selectedValues: Partial<{ [key in keyof CreateGameInput]: any }>;
    initialValues: Partial<GameAdminFormData>;
}>;

export type GameAdminFormProps = GameAdminFormStateProps &
    InjectedFormProps<GameAdminFormData, GameAdminFormStateProps>;
