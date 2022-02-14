import '@testing-library/jest-native/extend-expect'
import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import { typography, colors } from '@theme'

import { Text } from '..'

describe('Text component', () => {
  it('should have correct styles', () => {
    const { getByTestId } = render(
      <View>
        <Text testID='text1'>text1</Text>
        <Text testID='text2' lg>text2</Text>
        <Text testID='text3' sm>text3</Text>
        <Text testID='text4' bold>text4</Text>
        <Text testID='text5' accent>text5</Text>
        <Text testID='text6' secondary>text6</Text>
        <Text testID='text7' error>text7</Text>
      </View>,
    )

    expect(getByTestId('text1')).toHaveStyle({
      fontSize: typography.fontSize.md,
      fontFamily: typography.fontFamily.regular,
      color: colors.primary,
    })

    expect(getByTestId('text2')).toHaveStyle({
      fontSize: typography.fontSize.lg,
      fontFamily: typography.fontFamily.regular,
      color: colors.primary,
    })

    expect(getByTestId('text3')).toHaveStyle({
      fontSize: typography.fontSize.sm,
      fontFamily: typography.fontFamily.regular,
      color: colors.primary,
    })

    expect(getByTestId('text4')).toHaveStyle({
      fontSize: typography.fontSize.md,
      fontFamily: typography.fontFamily.bold,
      color: colors.primary,
    })

    expect(getByTestId('text5')).toHaveStyle({
      fontSize: typography.fontSize.md,
      fontFamily: typography.fontFamily.regular,
      color: colors.accent,
    })

    expect(getByTestId('text6')).toHaveStyle({
      fontSize: typography.fontSize.md,
      fontFamily: typography.fontFamily.regular,
      color: colors.secondary,
    })

    expect(getByTestId('text7')).toHaveStyle({
      fontSize: typography.fontSize.md,
      fontFamily: typography.fontFamily.regular,
      color: colors.error,
    })
  })
})
