import { InjectedFormProps } from 'redux-form';

import { Credentials } from '../../Auth';

export type SignInFormData = Readonly<{
    credentials: Credentials;
}>;

export type SignInFormStateProps = Partial<
    Readonly<{
        selectedValues: Partial<{ [key in keyof Credentials]: any }>;
        initialValues: Partial<SignInFormData>;
    }>
>;

export type SignInFormProps = SignInFormStateProps & InjectedFormProps<SignInFormData, SignInFormStateProps>;
