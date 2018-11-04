import { reduxForm } from 'redux-form';
import Worlds from '../../../components/forms/admin/Worlds';

export default reduxForm({
    form: 'Worlds'
})(Worlds);
