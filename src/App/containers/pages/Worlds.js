import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Worlds from '../../components/pages/Worlds';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Worlds);
