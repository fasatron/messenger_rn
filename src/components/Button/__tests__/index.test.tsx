import '@testing-library/jest-native/extend-expect'
import React from 'react'
import { render } from '@testing-library/react-native'

import { Button } from '..'

describe('Button component', () => {
  it('should be disabled', () => {
    const { getByTestId } = render(
      <Button
        title='Button'
        disabled
        testID='button'
      />,
    )

    const button = getByTestId('button')

    expect(button).toBeDisabled()
    expect(button).toHaveStyle({
      opacity: 0.7,
    })
  })
})
