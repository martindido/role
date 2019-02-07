import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getTranslate } from 'react-localize-redux';
import Search from '../../components/header/Search';
import { searchAll } from '../../actions/graphql';
import { setSearchLoading, unsetSearchResults } from '../../actions/search';

import type { State } from '../../types/State';

const mapStateToProps = ({ localize, search: { results, isLoading } }: State) => ({
    translate: getTranslate(localize),
    results,
    isLoading
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            setSearchLoading,
            searchAll,
            unsetSearchResults
        },
        dispatch
    );

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Search)
);
