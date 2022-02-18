import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { FormProvider } from 'react-hook-form'

import { spacings } from '@theme'
import { Button, FormInput, Text } from '@components'

import { useNewPasswordScreen } from './hooks'

export const NewPasswordScreen: FC = () => {
  const {
    formMethods,
    validators,
    handleButtonPress,
    handleBackToSignInPress,
  } = useNewPasswordScreen()

  return (
    <View style={styles.container}>
      <Text
        lg
        bold
        style={styles.title}
        accessibilityRole='header'
      >
        Create new password
      </Text>
      <FormProvider
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...formMethods}
      >
        <FormInput
          keyboardType='default'
          autoComplete='email'
          placeholder='Email'
          name='email'
          rules={validators.email}
        />

        <FormInput
          keyboardType='default'
          textContentType='password'
          secureTextEntry
          placeholder='Enter your new password'
          name='password'
          rules={validators.password}
        />

        <FormInput
          keyboardType='default'
          textContentType='password'
          placeholder='Confirm password'
          secureTextEntry
          name='confirmPassword'
          rules={validators.confirmPassword}
        />
      </FormProvider>

      <Button
        title='Submit'
        style={styles.button}
        onPress={handleButtonPress}
      />
      <Text
        bold
        accent
        onPress={handleBackToSignInPress}
      >
        Back to Sign in
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacings.screen,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginVertical: 15,
  },
})
