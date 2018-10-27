import type { UnconfirmedUser } from './User';

export type SignUpValidationData = {
    code: string
};

export type SignUpValidation = UnconfirmedUser & SignUpValidationData;
