import { InjectedFormProps } from 'redux-form';

import { Credentials } from '../../Auth';

export type SignUpFormData = Readonly<{
    credentials: Credentials;
}>;

export type SignUpFormStateProps = Partial<
    Readonly<{
        selectedValues: Partial<{ [key in keyof Credentials]: any }>;
        initialValues: Partial<SignUpFormData>;
    }>
>;

export type SignUpFormProps = SignUpFormStateProps & InjectedFormProps<SignUpFormData, SignUpFormStateProps>;
