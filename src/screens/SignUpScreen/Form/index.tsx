import React, { FC, Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'

import { errorMessages } from '@config'
import { validators as baseValidators } from '@utils'

import { Button, FormInput, Text } from '@components'

import { IFormData } from '../types'

interface IFormProps {
  onSubmit: SubmitHandler<IFormData>,
}

export const Form: FC<IFormProps> = ({ onSubmit }) => {
  const formMethods = useForm<IFormData>()
  const {
    handleSubmit,
    getValues,
  } = formMethods

  const validators = {
    ...baseValidators,
    confirmPassword: {
      required: errorMessages.confirmPassword,
      validate: (value: string) => (
        value === getValues('password') || errorMessages.passwordMismatch
      ),
    },
    firstName: {
      required: errorMessages.firstNameRequired,
    },
    lastName: {
      required: errorMessages.lastNameRequired,
    },
  }

  return (
    <Fragment>
      <Text
        lg
        bold
        style={styles.title}
        accessibilityRole='header'
      >
        Sign Up
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
          rules={validators.password}
          testID='passwordInput'
        />

        <FormInput
          keyboardType='default'
          textContentType='password'
          secureTextEntry
          placeholder='Confirm password'
          name='confirmPassword'
          rules={validators.confirmPassword}
          testID='confirmPasswordInput'
        />

        <FormInput
          keyboardType='default'
          placeholder='First Name'
          name='firstName'
          rules={validators.firstName}
          testID='firstNameInput'
        />

        <FormInput
          keyboardType='default'
          placeholder='Last Name'
          name='lastName'
          rules={validators.lastName}
          testID='lastNameInput'
        />
      </FormProvider>

      <Button
        title='Create account'
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
