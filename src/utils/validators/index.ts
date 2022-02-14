import {
  EMAIL_PATTERN,
  PASSWORD_MIN_LENGTH,
  PASSWORD_PATTERN,
  errorMessages,
} from '@config'

export const validators = {
  email: {
    required: errorMessages.emailRequired,
    pattern: {
      value: EMAIL_PATTERN,
      message: errorMessages.invalidEmail,
    },
  },
  password: {
    required: errorMessages.passwordRequired,
    minLength: {
      value: PASSWORD_MIN_LENGTH,
      message: errorMessages.smallPasswordLength,
    },
    pattern: {
      value: PASSWORD_PATTERN,
      message: errorMessages.invalidPassword,
    },
  },
} as const
