import React, { FC } from 'react'
import {
  StyleSheet,
  View,
  TextInputProps,
} from 'react-native'
import {
  UseControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form'

import { Input, Text } from '@components'

interface IFormInputProps extends TextInputProps, UseControllerProps {
  defaultValue?: string,
}

export const FormInput: FC<IFormInputProps> = ({
  control,
  rules,
  name,
  defaultValue,
  ...textInputProps
}) => {
  const { field } = useController({ name, rules, defaultValue })
  const { formState: { errors } } = useFormContext()
  const error = errors[name]

  return (
    <View style={styles.container}>
      <Input
        {...textInputProps}
        style={styles.input}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
      />
      {error && (
        <Text
          sm
          error
        >
          {error.message}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },
})
