import { reduxForm } from 'redux-form';
import SignIn from '../../components/forms/SignIn';

export default reduxForm({
    form: 'SignIn'
})(SignIn);
