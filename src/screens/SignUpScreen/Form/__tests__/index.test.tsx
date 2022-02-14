import '@testing-library/jest-native/extend-expect'
import React from 'react'
import { render, fireEvent, act } from '@testing-library/react-native'

import { errorMessages } from '@config'

import { Form } from '..'

describe('SignIn form', () => {
  it('validates form fields', async () => {
    const {
      getByTestId,
      queryByText,
    } = render(<Form onSubmit={jest.fn()} />)

    const button = getByTestId('button')

    await act(async () => fireEvent.press(button))

    expect(queryByText(errorMessages.emailRequired)).not.toBeNull()
    expect(queryByText(errorMessages.passwordRequired)).not.toBeNull()
    expect(queryByText(errorMessages.confirmPassword)).not.toBeNull()
    expect(queryByText(errorMessages.firstNameRequired)).not.toBeNull()
    expect(queryByText(errorMessages.lastNameRequired)).not.toBeNull()

    const emailInput = getByTestId('emailInput')
    const passwordInput = getByTestId('passwordInput')
    const confirmPasswordInput = getByTestId('confirmPasswordInput')

    await act(async () => fireEvent.changeText(emailInput, 'wrong email'))
    await act(async () => fireEvent.changeText(passwordInput, 'pass'))

    expect(queryByText(errorMessages.invalidEmail)).not.toBeNull()
    expect(queryByText(errorMessages.smallPasswordLength)).not.toBeNull()

    await act(async () => fireEvent.changeText(passwordInput, 'password'))

    expect(queryByText(errorMessages.invalidPassword)).not.toBeNull()

    await act(async () => fireEvent.changeText(passwordInput, 'SD4as2W22'))
    await act(async () => fireEvent.changeText(confirmPasswordInput, 'SD4as2W23'))

    expect(queryByText(errorMessages.passwordMismatch)).not.toBeNull()
  })

  it('calls onSubmit handler with form data', async () => {
    const onSubmit = jest.fn()

    const { getByTestId } = render(<Form onSubmit={onSubmit} />)

    const button = getByTestId('button')
    const emailInput = getByTestId('emailInput')
    const passwordInput = getByTestId('passwordInput')
    const confirmPasswordInput = getByTestId('confirmPasswordInput')
    const firstNameInput = getByTestId('firstNameInput')
    const lastNameInput = getByTestId('lastNameInput')

    const email = 'test@example.com'
    const password = 'SD4as2W22'
    const confirmPassword = 'SD4as2W22'
    const firstName = 'John'
    const lastName = 'Silver'

    await act(async () => fireEvent.changeText(emailInput, email))
    await act(async () => fireEvent.changeText(passwordInput, password))
    await act(async () => fireEvent.changeText(confirmPasswordInput, confirmPassword))
    await act(async () => fireEvent.changeText(firstNameInput, firstName))
    await act(async () => fireEvent.changeText(lastNameInput, lastName))
    await act(async () => fireEvent.press(button))

    expect(onSubmit).toBeCalledWith(
      expect.objectContaining({
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
      }),
      undefined,
    )
  })
})
