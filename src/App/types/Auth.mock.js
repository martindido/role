import { unconfirmedUser, USERNAME } from './User.mock';

export const CODE = '123456';
export const EMAIL = 'role@center.com';
export const PASSWORD = 'abc123';

export const signUpConfirmData = {
    code: CODE
};

export const signUpConfirm = {
    ...unconfirmedUser,
    ...signUpConfirmData
};

export const credentials = {
    username: USERNAME,
    password: PASSWORD
};

export const credentialsWithEmail = {
    email: EMAIL,
    username: USERNAME,
    password: PASSWORD
};
