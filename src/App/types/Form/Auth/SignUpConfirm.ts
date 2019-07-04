import { InjectedFormProps } from 'redux-form';

import { Confirmation } from '../../Auth';
import { User } from '../../User';

export type SignUpConfirmFormData = Readonly<{
    user: User;
    confirmation: Confirmation;
}>;

export type SignUpConfirmFormStateProps = Partial<
    Readonly<{
        selectedValues: Partial<{ [key in keyof Confirmation]: any }>;
        initialValues: Partial<SignUpConfirmFormData>;
    }>
>;

export type SignUpConfirmFormProps = SignUpConfirmFormStateProps &
    InjectedFormProps<SignUpConfirmFormData, SignUpConfirmFormStateProps>;
