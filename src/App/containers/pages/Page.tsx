import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Page from '../../components/pages/Page';
import { Action } from '../../types/Action';
import { State } from '../../types/State';

const mapStateToProps = ({ routing: { isLoading, isNotFound } }: State) => ({
    isLoading,
    isNotFound
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);
