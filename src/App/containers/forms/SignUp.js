import { reduxForm } from 'redux-form';
import SignUp from '../../components/forms/SignUp';

export default reduxForm({
    form: 'SignUp'
})(SignUp);
