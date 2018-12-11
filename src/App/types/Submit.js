import { SubmissionError } from 'redux-form';

import type { World } from './World';

export type Error = {} | string;

export type Errors = Array<Error>;

export type Submit = {
    success?: {},
    errors?: Errors
};

export type UpdateWorldSubmit = {
    success?: World,
    errors?: Errors
}

export type SubmitMeta = {
    resolve: {} => void,
    reject: (typeof SubmissionError) => void
}
