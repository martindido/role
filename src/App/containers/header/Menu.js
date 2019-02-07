import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getTranslate, getActiveLanguage, withLocalize } from 'react-localize-redux';
import { setCurrentLanguage } from '../../actions/locale';
import Menu from '../../components/header/Menu';

import type { State } from '../../types/State';

const mapStateToProps = ({ localize, auth, routing }: State) => ({
    translate: getTranslate(localize),
    currentLanguage: getActiveLanguage(localize).code,
    currentUser: auth.currentUser,
    previousLocation: routing.previousLocation,
    isLoading: routing.isLoading
});

const mapDispatchToProps = (dispatch: *) =>
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
