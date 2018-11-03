import { reduxForm } from 'redux-form';
import SignUp from '../../../components/forms/auth/SignUp';

export default reduxForm({
    form: 'SignUp'
})(SignUp);
