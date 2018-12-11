import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import Page from '../../components/pages/Page';

import type { State } from '../../types/State';

const mapStateToProps = ({routing: {isLoading, isNotFound}}: State) => ({
    isLoading,
    isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

const PageWithRoute = (props) => (
    <Route render={ (routeProps) => (
        <Page { ...props } { ...routeProps } />
    ) }/>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageWithRoute);
