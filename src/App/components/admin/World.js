import React, { Component, Fragment } from 'react';
import Page from '../../containers/pages/Page';
import Form from '../../containers/forms/admin/World';
import { Header } from 'semantic-ui-react';

import type { World as WorldType } from '../../types/World';
import type { UpdateWorldInput, CreateWorldInput } from '../../types/GraphQL';
import type {
    CreateWorldSubmitActionCreator,
    UpdateWorldSubmitActionCreator,
    SetWorldActionCreator,
    SetNotFoundActionCreator,
    SetLoadingActionCreator
} from '../../types/ActionCreator';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    setLoading: SetLoadingActionCreator,
    setNotFound: SetNotFoundActionCreator,
    setWorld: SetWorldActionCreator,
    createWorldSubmit: CreateWorldSubmitActionCreator,
    updateWorldSubmit: UpdateWorldSubmitActionCreator,
    computedMatch: {
        params: {
            worldId: string
        }
    },
    history: RouterHistory,
    isLoading: boolean,
    isNotFound: boolean,
    world?: WorldType
};

export default class World extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        const {isLoading, isNotFound, world, computedMatch} = this.props;
        const worldId = !!world && world.id;
        const pathId = computedMatch.params.worldId;
        const hasLoadFinished = isNotFound || worldId === pathId;
        const hasWorldChanged = prevProps.world !== world;

        if (isLoading && hasLoadFinished) {
            return this.handleLoadFinished();
        }
        if (hasWorldChanged) {
            return this.handleWorldChanged()
        }
    }

    componentWillUnmount() {
        this.props.setLoading(false);
        this.props.setNotFound(false);
    }

    handleLoadFinished() {
        this.props.setLoading(false);
    }

    handleWorldChanged() {
        this.props.history.push(this.getUp());
    }

    handleSubmitCreate = async (world: CreateWorldInput) => {
        try {
            await new Promise((resolve, reject) => {
                this.props.createWorldSubmit(world, {
                    resolve,
                    reject
                });
            })

        }
        catch (err) {
            throw err;
        }
    }

    handleSubmitUpdate = async (world: UpdateWorldInput) => {
        try {
            await new Promise((resolve, reject) => {
                this.props.updateWorldSubmit(world, {
                    resolve,
                    reject
                });
            })

        }
        catch (err) {
            throw err;
        }
    }

    getUp() {
        const {computedMatch: {params: {worldId}}, isNotFound} = this.props;

        return isNotFound || !worldId ? '/' : `/worlds/${ worldId }`;
    }

    render() {
        const {computedMatch: {params: {worldId}}, world} = this.props;
        const handleSubmit = worldId ? this.handleSubmitUpdate : this.handleSubmitCreate;
        const header = {
            menu: {
                up: this.getUp()
            }
        };

        return (
            <Page title='World Admin' className='admin new-world' header={ header }>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        { world ? `Edit ${ world.name }` : 'Add a new world' }
                    </Header>
                    <Form onSubmit={ handleSubmit }></Form>
                </Fragment>
            </Page>
        );
    }
}
