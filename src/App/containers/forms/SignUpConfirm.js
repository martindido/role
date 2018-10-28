import { reduxForm } from 'redux-form';
import SignUpConfirm from '../../components/forms/SignUpConfirm';

export default reduxForm({
    form: 'SignUpConfirm'
})(SignUpConfirm);
