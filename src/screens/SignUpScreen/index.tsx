import React, { FC } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { FormProvider } from 'react-hook-form'

import { spacings } from '@theme'
import { Button, FormInput, Text } from '@components'

import { useSignUpScreen } from './hooks'

export const SignUpScreen: FC = () => {
  const {
    formMethods,
    validators,
    handleButtonPress,
    handleSignInPress,
  } = useSignUpScreen()

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
            />

            <FormInput
              keyboardType='default'
              textContentType='password'
              secureTextEntry
              placeholder='Password'
              name='password'
              rules={validators.password}
            />
            <FormInput
              keyboardType='default'
              textContentType='password'
              secureTextEntry
              placeholder='Confirm password'
              name='confirmPassword'
              rules={validators.confirmPassword}
            />

            <FormInput
              keyboardType='default'
              placeholder='First Name'
              name='firstName'
              rules={validators.firstName}
            />

            <FormInput
              keyboardType='default'
              placeholder='Last Name'
              name='lastName'
              rules={validators.lastName}
            />
          </FormProvider>

          <Button
            title='Create account'
            style={styles.button}
            onPress={handleButtonPress}
          />
          <View style={styles.bottomTextContainer}>
            <Text>
              Already have an account?
            </Text>
            <Text>{' '}</Text>
            <Text
              bold
              accent
              onPress={handleSignInPress}
            >
              Sign in
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
  bottomTextContainer: {
    flexDirection: 'row',
  },
})
