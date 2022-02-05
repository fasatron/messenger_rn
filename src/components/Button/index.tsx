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
  onPress,
  style,
  disabled,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, disabled && styles.disabled, style]}
    accessibilityRole='button'
    disabled={disabled}
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
