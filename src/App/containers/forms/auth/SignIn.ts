import { reduxForm } from 'redux-form';

import SignIn from '../../../components/forms/auth/SignIn';
import { SignInFormData, SignInFormStateProps } from '../../../types/Form/Auth/SignIn';

export default reduxForm<SignInFormData, SignInFormStateProps>({
    form: 'SignIn'
})(SignIn);
