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

    const emailInput = getByTestId('emailInput')

    await act(async () => fireEvent.changeText(emailInput, 'wrong email'))

    expect(queryByText(errorMessages.invalidEmail)).not.toBeNull()
  })

  it('calls onSubmit handler with form data', async () => {
    const onSubmit = jest.fn()

    const { getByTestId } = render(<Form onSubmit={onSubmit} />)

    const button = getByTestId('button')
    const emailInput = getByTestId('emailInput')
    const passwordInput = getByTestId('passwordInput')

    const email = 'test@example.com'
    const password = 'SD4as2W22'

    await act(async () => fireEvent.changeText(emailInput, email))
    await act(async () => fireEvent.changeText(passwordInput, password))
    await act(async () => fireEvent.press(button))

    expect(onSubmit).toBeCalledWith(
      expect.objectContaining({
        email,
        password,
      }),
      undefined,
    )
  })
})
