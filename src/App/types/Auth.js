import type { UnconfirmedUser } from './User';

export type SignUpConfirmData = {
    code: string
};

export type SignUpConfirm = UnconfirmedUser & SignUpConfirmData;
