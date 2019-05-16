import { reduxForm } from 'redux-form';

import SignUp from '../../../components/forms/auth/SignUp';
import { SignUpFormData, SignUpFormStateProps } from '../../../types/Form/Auth/SignUp';

export default reduxForm<SignUpFormData, SignUpFormStateProps>({
    form: 'SignUp'
})(SignUp);
