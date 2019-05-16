export const rCode = /^[0-9]{6}$/i;
export const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const rPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*().,:;"'<>_-])/;

export const isRequired = (value: any) => (value || typeof value === 'number' ? undefined : 'Required');

export const isValidEmail = (value: any) => (rEmail.test(String(value)) ? undefined : 'Must be a valid email address');

export const isValidPassword = (value: any) =>
    rPassword.test(String(value))
        ? undefined
        : 'Must have at least 1 lowecase, 1 uppercase, 1 numeric and 1 special character';

export const hasMinLength = (min: number) => (value: any) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const isValidCode = (value: any) => (rCode.test(String(value)) ? undefined : 'Must be a valid code');
