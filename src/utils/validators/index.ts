// eslint-disable-next-line no-useless-escape
const EMAIL_PATTERN = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

const PASSWORD_MIN_LENGTH = 1
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/

export const validators = {
  email: {
    required: 'Email is required',
    pattern: {
      value: EMAIL_PATTERN,
      message: 'Incorrect email',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: PASSWORD_MIN_LENGTH,
      message: `Password length must be at least ${PASSWORD_MIN_LENGTH} characters`,
    },
    pattern: {
      value: PASSWORD_PATTERN,
      message: 'The password must contain letters and numbers',
    },
  },
}
