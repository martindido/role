import { withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { searchAll } from '../../actions/graphql';
import { setSearchLoading, unsetSearchResults } from '../../actions/search';
import Search from '../../components/header/Search';
import { Action } from '../../types/Action';
import { State } from '../../types/State';

const mapStateToProps = ({ search: { results, isLoading } }: State) => ({
    results,
    isLoading
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            setSearchLoading,
            searchAll,
            unsetSearchResults
        },
        dispatch
    );

export default withLocalize(
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(Search)
    )
);
