export enum Screens {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  NewPassword = 'NewPassword',
  ConfirmEmail = 'ConfirmEmail',
  ConfirmPassword = 'ConfirmPassword',
  Chats = 'Chats',
  Search = 'Search',
  Calls = 'Calls',
  Settings = 'Settings',
}

// eslint-disable-next-line no-useless-escape
export const EMAIL_PATTERN = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
export const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
export const PASSWORD_MIN_LENGTH = 8

export const errorMessages = {
  invalidEmail: 'Invalid email address',
  emailRequired: 'Email is required',
  smallPasswordLength: `Password length must be at least ${PASSWORD_MIN_LENGTH} characters`,
  invalidPassword: 'The password must contain letters and numbers',
  passwordRequired: 'Password is required',
  passwordMismatch: 'Password mismatch',
  firstNameRequired: 'First Name is required',
  lastNameRequired: 'Last Name is required',
  confirmPassword: 'Confirm your password',
} as const

export const successMessages = {
  passwordChanged: 'Password has been successfully changed',
  accountCreated: 'Your account has been successfully created',
} as const

export const infoMessages = {
  weSentCode: 'We have sent a verification code to your email',
} as const
