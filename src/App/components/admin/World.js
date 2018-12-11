import React, { Component, Fragment } from 'react';
import Page from '../../containers/pages/Page';
import Form from '../../containers/forms/admin/World';
import { Header } from 'semantic-ui-react';

import type { World } from '../../types/World';
import type { UpdateWorldInput, CreateWorldInput } from '../../types/GraphQL';
import type {
    CreateWorldSubmitActionCreator,
    UpdateWorldSubmitActionCreator,
    SetWorldActionCreator,
    UnsetSubmitActionCreator,
    SetNotFoundActionCreator,
    SetLoadingActionCreator
} from '../../types/ActionCreator';

export type Props = {
    setLoading: SetLoadingActionCreator,
    setNotFound: SetNotFoundActionCreator,
    unsetSubmit: UnsetSubmitActionCreator,
    setWorld: SetWorldActionCreator,
    createWorldSubmit: CreateWorldSubmitActionCreator,
    updateWorldSubmit: UpdateWorldSubmitActionCreator,
    computedMatch: {
        params: {
            id: string
        }
    },
    isLoading: boolean,
    isNotFound: boolean,
    world?: World
};

export default class NewWorld extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        const {isLoading, isNotFound, world, computedMatch} = this.props;
        const worldId = !!world && world.id;
        const pathId = computedMatch.params.id;
        const hasLoadFinished = isNotFound || worldId === pathId;

        if (isLoading && hasLoadFinished) {
            return this.handleLoadFinished();
        }
    }

    componentWillUnmount() {
        this.props.setLoading(false);
        this.props.setNotFound(false);
    }

    handleLoadFinished() {
        this.props.setLoading(false);
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

    render() {
        const {computedMatch: {params: {id: worldId}}, isNotFound, world} = this.props;
        const handleSubmit = worldId ? this.handleSubmitUpdate : this.handleSubmitCreate;
        const header = {
            menu: {
                up: isNotFound || !worldId ? '/' : `/worlds/${ worldId }`
            }
        };

        return (
            <Page title='World Admin' className='admin new-world' header={ header }>
                <Fragment>
                    <Header as='h2' color='black' textAlign='center' inverted>
                        { world ? `Edit ${ world.name }` : 'Add new world' }
                    </Header>
                    <Form onSubmit={ handleSubmit } world={ world }></Form>
                </Fragment>
            </Page>
        );
    }
}
