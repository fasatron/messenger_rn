import React, { FC } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
} from 'react-native'
import {
  UseControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form'

import { colors } from '@theme'

import { Text } from '../Text'

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
      <TextInput
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...textInputProps}
        style={styles.input}
        placeholderTextColor={colors.secondary}
        autoCapitalize='none'
        autoCorrect={false}
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
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
})
