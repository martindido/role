import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../../components/pages/Loading';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading);
