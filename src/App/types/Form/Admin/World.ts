import { InjectedFormProps } from 'redux-form';

import { CreateWorldInput, UpdateWorldInput } from '../../GraphQL';
import { File } from '../../Storage';
import { World } from '../../World';

export type WorldAdminFormData = Readonly<{
    world: Partial<CreateWorldInput>;
    logo: File;
}>;

export type CreateWorldFormData = WorldAdminFormData &
    Readonly<{
        world: CreateWorldInput;
    }>;

export type UpdateWorldFormData = Readonly<{
    world: UpdateWorldInput;
    logo?: File;
}>;

export type WorldAdminFormStateProps = Readonly<{
    world?: World;
    selectedValues: Partial<{ [key in keyof CreateWorldInput]: any }>;
    initialValues: Partial<WorldAdminFormData>;
}>;

export type WorldAdminFormProps = WorldAdminFormStateProps &
    InjectedFormProps<WorldAdminFormData, WorldAdminFormStateProps>;
