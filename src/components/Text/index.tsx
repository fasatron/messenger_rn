import React from 'react'
import { Text as RNText, TextProps } from 'react-native'

import { colors, typography } from '@theme'

interface ITextProps extends TextProps {
  sm?: boolean,
  md?: boolean,
  lg?: boolean,
  regular?: boolean,
  bold?: boolean,
  accent?: boolean,
  primary?: boolean,
  secondary?: boolean,
  error?: boolean,
}

export const Text = ({
  sm,
  md = true,
  lg,
  regular = true,
  bold,
  accent,
  primary = true,
  secondary,
  error,
  style,
  ...textProps
}: ITextProps) => (
  <RNText
  // eslint-disable-next-line react/jsx-props-no-spreading
    {...textProps}
    style={[
      md && { fontSize: typography.fontSize.md },
      sm && { fontSize: typography.fontSize.sm },
      lg && { fontSize: typography.fontSize.lg },

      regular && { fontFamily: typography.fontFamily.regular },
      bold && { fontFamily: typography.fontFamily.bold },

      primary && { color: colors.primary },
      accent && { color: colors.accent },
      secondary && { color: colors.secondary },
      error && { color: colors.error },
      style,
    ]}
  />
)