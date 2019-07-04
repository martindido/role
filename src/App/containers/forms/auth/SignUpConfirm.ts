import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { reduxForm } from 'redux-form';

import SignUpConfirm from '../../../components/forms/auth/SignUpConfirm';
import { Action } from '../../../types/Action';
import { SignUpConfirmFormData, SignUpConfirmFormStateProps } from '../../../types/Form/Auth/SignUpConfirm';
import { State } from '../../../types/State';

const mapStateToProps = ({ auth }: State): SignUpConfirmFormStateProps => ({
    initialValues: {
        user: auth.currentUnconfirmedUser
    }
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    reduxForm<SignUpConfirmFormData, SignUpConfirmFormStateProps>({
        form: 'SignUpConfirm'
    })(SignUpConfirm)
);
