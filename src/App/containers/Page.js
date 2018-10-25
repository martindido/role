import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router';
import Page from '../components/Page';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

const PageWithRoute = (props) => (
    <Route render={(routeProps) => (
        <Page {...props} {...routeProps} />
    )}/>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageWithRoute);
