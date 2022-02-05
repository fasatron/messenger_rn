import React, { FC } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { FormProvider } from 'react-hook-form'

import { spacings } from '@theme'
import { validators } from '@utils'
import { Button, FormInput, Text } from '@components'

import { useSignInScreen } from './hooks'

export const SignInScreen: FC = () => {
  const {
    formMethods,
    handleButtonPress,
    handleSignUpPress,
    handleForgotPasswordPress,
  } = useSignInScreen()

  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
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
            />

            <FormInput
              keyboardType='default'
              textContentType='password'
              secureTextEntry
              placeholder='Password'
              name='password'
              rules={validators.password}
            />
          </FormProvider>

          <Button
            title='Log In'
            style={styles.button}
            onPress={handleButtonPress}
          />
          <Text
            bold
            accent
            style={styles.forgotPassword}
            onPress={handleForgotPasswordPress}
          >
            Forgot password?
          </Text>
          <View style={styles.bottomTextContainer}>
            <Text>
              Don&apos;t have an account?
            </Text>
            <Text>{' '}</Text>
            <Text
              bold
              accent
              onPress={handleSignUpPress}
            >
              Sign up
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacings.screen,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginVertical: 15,
  },
  forgotPassword: {
    marginBottom: 15,
  },
  bottomTextContainer: {
    flexDirection: 'row',
  },
})
