import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotFound from '../../components/pages/NotFound';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotFound);
