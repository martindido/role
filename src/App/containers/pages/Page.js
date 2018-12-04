import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import Page from '../../components/pages/Page';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

const PageWithRoute = (props) => (
    <Route render={(routeProps) => (
        <Page { ...props } { ...routeProps } />
    )}/>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageWithRoute);
