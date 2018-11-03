import { reduxForm } from 'redux-form';
import SignIn from '../../../components/forms/auth/SignIn';

export default reduxForm({
    form: 'SignIn'
})(SignIn);
