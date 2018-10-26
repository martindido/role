import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import About from '../components/About';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);
