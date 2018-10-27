import { reduxForm } from 'redux-form';
import SignUpValidation from '../../components/forms/SignUpValidation';

export default reduxForm({
    form: 'SignUpValidation'
})(SignUpValidation);
