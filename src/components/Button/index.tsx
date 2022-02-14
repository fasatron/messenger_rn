import React, { FC } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { colors } from '@theme'

import { Text } from '../Text'

interface IButtonProps extends TouchableOpacityProps {
  title: string,
}

export const Button: FC<IButtonProps> = ({
  title,
  ...touchableOpacityProps
}) => (
  <TouchableOpacity
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...touchableOpacityProps}
    style={[
      styles.container,
      touchableOpacityProps.disabled && styles.disabled,
      touchableOpacityProps.style,
    ]}
    accessibilityRole='button'
  >
    <Text
      bold
      style={styles.title}
    >
      {title}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.accent,
    borderRadius: 10,
  },
  disabled: {
    opacity: 0.7,
  },
  title: {
    color: '#fff',
  },
})
