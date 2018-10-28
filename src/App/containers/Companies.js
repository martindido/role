import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Companies from '../components/Companies';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Companies);
