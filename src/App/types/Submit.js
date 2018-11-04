export type SubmitSuccess = {
    success: {}
};

export type SubmitError = {
    errors: Array<{} | string>
};

export type Submit = {
    success?: {},
    errors?: Array<{} | string>
};
