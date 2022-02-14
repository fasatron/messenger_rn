import React, { FC, Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'

import { validators } from '@utils'
import { Button, FormInput, Text } from '@components'

import { IFormData } from '../types'

interface IFormProps {
  onSubmit: SubmitHandler<IFormData>,
}

export const Form: FC<IFormProps> = ({ onSubmit }) => {
  const formMethods = useForm<IFormData>()
  const { handleSubmit } = formMethods

  return (
    <Fragment>
      <Text
        lg
        bold
        style={styles.title}
        accessibilityRole='header'
      >
        Sign In
      </Text>
      <FormProvider
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...formMethods}
      >
        <FormInput
          keyboardType='email-address'
          autoComplete='email'
          placeholder='Email'
          name='email'
          rules={validators.email}
          testID='emailInput'
        />

        <FormInput
          keyboardType='default'
          textContentType='password'
          secureTextEntry
          placeholder='Password'
          name='password'
          rules={{
            required: validators.password.required,
          }}
          testID='passwordInput'
        />
      </FormProvider>

      <Button
        title='Login'
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
        testID='button'
      />
    </Fragment>
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginVertical: 15,
  },
})
