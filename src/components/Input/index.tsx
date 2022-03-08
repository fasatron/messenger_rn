import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

import { colors } from '@theme'

export const Input = (props: TextInputProps) => (
  <TextInput
    {...props}
    style={[styles.container, props.style]}
    placeholderTextColor={colors.secondary}
    autoCapitalize='none'
    autoCorrect={false}
  />
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
})
