import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Search from '../../components/header/Search';
import { searchAll } from '../../actions/graphql';
import { setSearchLoading, unsetSearchResults } from '../../actions/search';

import type { State } from '../../types/State';

const mapStateToProps = ({ search: { results, isLoading } }: State) => ({
    results,
    isLoading
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        setSearchLoading,
        searchAll,
        unsetSearchResults
    }, dispatch);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Search)
);
