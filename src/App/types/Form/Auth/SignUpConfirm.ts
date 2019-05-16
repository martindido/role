import { InjectedFormProps } from 'redux-form';

import { Confirmation } from '../../Auth';

export type SignUpConfirmFormData = Readonly<Confirmation>;

export type SignUpConfirmFormStateProps = Partial<
    Readonly<{
        selectedValues: Partial<{ [key in keyof Confirmation]: any }>;
        initialValues: Partial<SignUpConfirmFormData>;
    }>
>;

export type SignUpConfirmFormProps = SignUpConfirmFormStateProps &
    InjectedFormProps<SignUpConfirmFormData, SignUpConfirmFormStateProps>;
