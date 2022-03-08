import React, { FC } from 'react'
import {
  StyleProp,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { colors } from '@theme'

import { Text } from '../Text'

interface IButtonProps extends TouchableOpacityProps {
  title: string,
  titleStyle?: StyleProp<TextStyle>,
}

export const Button: FC<IButtonProps> = ({
  title,
  titleStyle,
  ...touchableOpacityProps
}) => (
  <TouchableOpacity
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
      style={[styles.title, titleStyle]}
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
