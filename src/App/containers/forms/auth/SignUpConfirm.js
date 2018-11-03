import { reduxForm } from 'redux-form';
import SignUpConfirm from '../../../components/forms/auth/SignUpConfirm';

export default reduxForm({
    form: 'SignUpConfirm'
})(SignUpConfirm);
