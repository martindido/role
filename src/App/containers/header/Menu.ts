import { getActiveLanguage, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { setCurrentLanguage } from '../../actions/locale';
import Menu from '../../components/header/Menu';
import { Action } from '../../types/Action';
import { Language } from '../../types/Locale';
import { State } from '../../types/State';

const mapStateToProps = ({ localize, auth: { currentUser }, routing }: State) => ({
    currentLanguage: getActiveLanguage(localize).code as Language,
    isAdmin: !!currentUser && !!currentUser.isAdmin,
    previousLocation: routing.previousLocation,
    isLoading: routing.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            setCurrentLanguage
        },
        dispatch
    );

export default withLocalize(
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(Menu)
    )
);
