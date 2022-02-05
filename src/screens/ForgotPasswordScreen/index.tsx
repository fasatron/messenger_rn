import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { FormProvider } from 'react-hook-form'

import { spacings } from '@theme'
import { validators } from '@utils'
import { Button, FormInput, Text } from '@components'

import { useForgotPasswordScreen } from './hooks'

export const ForgotPasswordScreen: FC = () => {
  const {
    formMethods,
    handleButtonPress,
    handleBackToSignInPress,
  } = useForgotPasswordScreen()

  return (
    <View style={styles.container}>
      <Text
        lg
        bold
        style={styles.title}
        accessibilityRole='header'
      >
        Reset your password
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
      </FormProvider>

      <Button
        title='Send'
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
