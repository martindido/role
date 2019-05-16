import { reduxForm } from 'redux-form';

import SignUpConfirm from '../../../components/forms/auth/SignUpConfirm';
import { SignUpConfirmFormData, SignUpConfirmFormStateProps } from '../../../types/Form/Auth/SignUpConfirm';

export default reduxForm<SignUpConfirmFormData, SignUpConfirmFormStateProps>({
    form: 'SignUpConfirm'
})(SignUpConfirm);
